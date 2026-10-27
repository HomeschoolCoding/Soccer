// YOUR TASK: ball friction and kicking feel. Edit only this file.
namespace BallPhysics {
    export function kick(player: Sprite, ball: Sprite, power: number): void {
        let dx = ball.x - player.x
        let dy = ball.y - player.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 1) { dx = player.x < 80 ? 1 : -1; distance = 1 }
        ball.setVelocity(dx / distance * power, dy / distance * power)
    }
    export function slow(ball: Sprite): void {
        // Called every 50 ms. 1 means no friction; smaller numbers stop sooner.
        ball.vx *= 0.97
        ball.vy *= 0.97
        if (Math.abs(ball.vx) < 2) ball.vx = 0
        if (Math.abs(ball.vy) < 2) ball.vy = 0
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
