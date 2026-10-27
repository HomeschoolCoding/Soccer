// YOUR TASK: scoring and winning. Edit only this file.
namespace Goals {
    let redScore = 0
    let blueScore = 0
    export function check(ball: Sprite): void {
        if (ball.top < Pitch.goalTop() || ball.bottom > Pitch.goalBottom()) return
        if (ball.right <= Pitch.left()) {
            blueScore += 1
            SoccerMatch.resetRound()
        } else if (ball.left >= Pitch.right()) {
            redScore += 1
            SoccerMatch.resetRound()
        }
        // Student challenge: first team to five wins, then a fresh match.
    }
    export function drawScore(screen: Image): void {
        screen.fillRect(0, 0, 160, 12, 15)
        screen.print("RED " + redScore, 5, 2, 2)
        screen.print("BLUE " + blueScore, 105, 2, 8)
    }
}
