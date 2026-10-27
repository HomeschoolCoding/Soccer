// YOUR TASK: implement A passing and ball friction. Edit only this file.
namespace Passing {
    export function pass(playerNumber: number, player: Sprite, ball: Sprite): void {
        // A already calls this when you are near the ball.
        // TODO: get SoccerMatch.teammateFor(playerNumber); it can be null.
        // Aim from the ball toward that teammate and choose a pass speed.
        // Set ball velocity here. A deliberately does nothing yet.
    }
    export function slow(ball: Sprite): void {
        // TODO: implement friction. This runs every 50 ms for passes and shots.
        // Reduce velocity gradually and stop tiny movement without reversing it.
    }
}
