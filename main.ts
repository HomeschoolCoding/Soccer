// TEACHER HELPER: four players, movement, goals and kickoff.
// Students edit passing.ts, shooting.ts, art.ts or pitch.ts.
namespace SoccerMatch {
    let players: Sprite[] = []
    let ball: Sprite = null
    let kickoffUntil = 0
    let nextAction = [0, 0, 0, 0, 0]

    export function playerFor(n: number): Sprite { return players[n] }
    export function teammateFor(n: number): Sprite {
        return players[n <= 2 ? n + 2 : n - 2]
    }

    function place(n: number): void {
        if (players[n]) players[n].setPosition(n % 2 == 1 ? 44 : 116, n <= 2 ? 42 : 82)
    }
    export function resetRound(): void {
        ball.setPosition(80, 62)
        ball.setVelocity(0, 0)
        for (let n = 1; n <= 4; n++) place(n)
        kickoffUntil = game.runtime() + 500
    }
    function connect(player: mp.Player): void {
        let n = mp.getPlayerProperty(player, mp.PlayerProperty.Number)
        if (players[n]) return
        let character = sprites.create(SoccerArt.playerImage(n), SpriteKind.Player)
        players[n] = character
        mp.setPlayerSprite(player, character)
        mp.moveWithButtons(player, 60, 60)
        place(n)
    }
    export function start(): void {
        Pitch.draw()
        ball = sprites.create(SoccerArt.ballImage(), SpriteKind.Food)
        mp.setPlayerIndicatorsVisible(true)
        mp.onControllerEvent(ControllerEvent.Connected, function (player) { connect(player) })
        mp.onControllerEvent(ControllerEvent.Disconnected, function (player) {
            let n = mp.getPlayerProperty(player, mp.PlayerProperty.Number)
            if (players[n]) players[n].destroy()
            players[n] = null
            mp.setPlayerSprite(player, null)
        })
        for (let n = 1; n <= 4; n++) {
            let player = mp.getPlayerByNumber(n)
            mp.moveWithButtons(player, 60, 60)
            if (n == 1 || mp.isConnected(player)) connect(player)
        }
        mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
            let n = mp.getPlayerProperty(player, mp.PlayerProperty.Number)
            let character = players[n]
            if (!character || game.runtime() < kickoffUntil || game.runtime() < nextAction[n]) return
            if (Math.abs(character.x - ball.x) <= 13 && Math.abs(character.y - ball.y) <= 13) {
                Passing.pass(n, character, ball)
                nextAction[n] = game.runtime() + 250
            }
        })
        mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player) {
            let n = mp.getPlayerProperty(player, mp.PlayerProperty.Number)
            let character = players[n]
            if (!character || game.runtime() < kickoffUntil || game.runtime() < nextAction[n]) return
            if (Math.abs(character.x - ball.x) <= 13 && Math.abs(character.y - ball.y) <= 13) {
                Shooting.shoot(n, character, ball)
                nextAction[n] = game.runtime() + 250
            }
        })
        game.onUpdate(function () {
            for (let n = 1; n <= 4; n++) {
                let character = players[n]
                if (character) {
                    character.left = Math.max(character.left, Pitch.left() + 1)
                    character.right = Math.min(character.right, Pitch.right() - 1)
                    character.top = Math.max(character.top, Pitch.top() + 1)
                    character.bottom = Math.min(character.bottom, Pitch.bottom() - 1)
                }
            }
            // Player/ball overlap has no effect. Only student A/B code kicks.
            if (game.runtime() >= kickoffUntil) {
                BallPhysics.bounce(ball)
                Goals.check(ball)
            }
        })
        game.onUpdateInterval(50, function () { Passing.slow(ball) })
        scene.createRenderable(100, function (screen) {
            Goals.drawScore(screen)
            screen.fillRect(0, 112, 160, 8, 15)
            screen.print("Arrows A pass B shoot", 10, 113, 1)
        })
        resetRound()
    }
}
SoccerMatch.start()
