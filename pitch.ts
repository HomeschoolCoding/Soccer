// YOUR TASK: pitch artwork. Edit only this file.
namespace Pitch {
    // These boundaries are shared with physics and goals. Keep them for today.
    export function left(): number { return 8 }
    export function right(): number { return 152 }
    export function top(): number { return 16 }
    export function bottom(): number { return 108 }
    export function goalTop(): number { return 46 }
    export function goalBottom(): number { return 78 }
    export function inGoalMouth(y: number): boolean {
        return y >= goalTop() && y <= goalBottom()
    }
    // STUDENT TASK START: Pitch: turn the gray test area into a soccer arena (#21)
    // EDIT draw() here: replace the gray field and markers with the soccer pitch.
    // Keep the coordinate functions above unchanged; other code relies on them.
    export function draw(): void {
        let field = image.create(160, 120)
        // TODO: draw the actual pitch, markings and goals.
        // Gray is an unfinished placeholder; these two lines only mark the goal openings.
        field.fill(13)
        field.drawLine(left(), goalTop(), left(), goalBottom(), 12)
        field.drawLine(right(), goalTop(), right(), goalBottom(), 12)
        scene.setBackgroundImage(field)
    }
    // STUDENT TASK END: Pitch: turn the gray test area into a soccer arena

}
