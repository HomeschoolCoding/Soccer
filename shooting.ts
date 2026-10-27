// YOUR TASK: implement B shooting. Edit only this file.
namespace Shooting {
    // STUDENT TASK START: Shooting: implement B shots toward the attacking goal (#7)
    // WRITE YOUR B-BUTTON SHOT inside shoot(). It is currently empty.
    // Aim at the correct goal using playerNumber and Pitch coordinates.
    export function shoot(playerNumber: number, player: Sprite, ball: Sprite): void {
        // B already calls this when you are near the ball.
        // TODO: aim from the ball toward the attacking goal opening.
        // Players 1 + 3 (red) shoot right; players 2 + 4 (blue) shoot left.
        // Use Pitch.left/right/goalTop/goalBottom and choose a shot speed.
        // Set ball velocity here. B deliberately does nothing yet.
    }
    // STUDENT TASK END: Shooting: implement B shots toward the attacking goal

}
