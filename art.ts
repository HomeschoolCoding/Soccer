// YOUR TASK: small player art. Edit only this file.
namespace SoccerArt {
    export function playerImage(n: number): Image {
        let picture = img`
            ..dddd..
            ..dffd..
            ...dd...
            .222222.
            .222222.
            ..2222..
            ..f..f..
            .ff..ff.
        `
        // Players 1 + 3 are red; players 2 + 4 are blue.
        if (n % 2 == 0) picture.replace(2, 8)
        return picture
    }
    export function ballImage(): Image {
        // Original student soccer ball; sample it into a 6 x 6 image.
        let original = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 f f . . . .
    . . . . f f 1 1 1 1 f f f . . .
    . . . f f f 1 1 1 1 f f f 1 . .
    . . 1 f f f 1 1 1 1 1 1 1 1 f .
    . . 1 1 1 1 1 1 1 1 1 1 1 f f .
    . . 1 1 1 1 1 f f f 1 1 1 f f .
    . . 1 1 1 1 1 f f f 1 1 1 1 f .
    . . 1 1 1 1 1 f f f 1 1 1 1 1 .
    . . 1 f f f 1 1 1 1 1 1 1 1 1 .
    . . 1 f f f 1 1 1 1 f f f 1 1 .
    . . . f f f 1 1 1 1 f f f 1 . .
    . . . . 1 1 1 1 1 1 f f f . . .
    . . . . . 1 1 1 1 1 1 1 . . . .
    . . . . . . . . . . . . . . . .
`
        let small = image.create(6, 6)
        for (let x = 0; x < 6; x++) {
            for (let y = 0; y < 6; y++) {
                small.setPixel(x, y, original.getPixel(2 + x * 2, 2 + y * 2))
            }
        }
        return small
    }
}
