// TEACHER HELPER: ball boundaries. Students edit passing.ts or shooting.ts.
namespace BallPhysics {
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
