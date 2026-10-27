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
    export function draw(): void {
        let field = image.create(160, 120)
        field.fill(7)
        for (let x = left(); x < right(); x += 24) field.fillRect(x, top(), 12, bottom() - top(), 6)
        field.drawRect(left(), top(), right() - left(), bottom() - top(), 1)
        field.drawLine(80, top(), 80, bottom(), 1)
        field.drawCircle(80, 62, 15, 1)
        field.drawRect(left(), 36, 22, 52, 1)
        field.drawRect(right() - 22, 36, 22, 52, 1)
        field.fillRect(0, goalTop(), left() + 1, goalBottom() - goalTop(), 2)
        field.fillRect(right(), goalTop(), 8, goalBottom() - goalTop(), 8)
        scene.setBackgroundImage(field)
    }
}
