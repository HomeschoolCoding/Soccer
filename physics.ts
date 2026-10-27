// YOUR TASK: ball friction and kicking feel. Edit only this file.
namespace BallPhysics {
    export function kick(player: Sprite, ball: Sprite, power: number, playerNumber: number): void {
        let dx = ball.x - player.x
        let dy = ball.y - player.y
        if (power > 55) {
            // A currently passes toward the other teammate, not the goal.
            // TODO: make A shoot at the attacking goal (red right, blue left).
            let teammateNumber = playerNumber <= 2 ? playerNumber + 2 : playerNumber - 2
            let teammate = SoccerMatch.playerFor(teammateNumber)
            let targetX = teammate ? teammate.x : (playerNumber % 2 == 1 ? 44 : 116)
            let targetY = teammate ? teammate.y : (playerNumber <= 2 ? 82 : 42)
            dx = targetX - ball.x
            dy = targetY - ball.y
        }
        let distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 1) { dx = player.x < 80 ? 1 : -1; distance = 1 }
        ball.setVelocity(dx / distance * power, dy / distance * power)
    }
    export function slow(ball: Sprite): void {
        // TODO: implement friction here. Called every 50 ms.
        // The ball currently never slows down or comes to rest.
    }
    export function bounce(ball: Sprite): void {
        if (ball.top <= Pitch.top()) { ball.top = Pitch.top(); ball.vy = Math.abs(ball.vy) }
        if (ball.bottom >= Pitch.bottom()) { ball.bottom = Pitch.bottom(); ball.vy = -Math.abs(ball.vy) }
        // Goal openings use the whole ball, so post-edge hits cannot get stuck.
        let inOpening = ball.top >= Pitch.goalTop() && ball.bottom <= Pitch.goalBottom()
        if (!inOpening) {
            if (ball.left <= Pitch.left()) { ball.left = Pitch.left(); ball.vx = Math.abs(ball.vx) }
            if (ball.right >= Pitch.right()) { ball.right = Pitch.right(); ball.vx = -Math.abs(ball.vx) }
        }
    }
}
