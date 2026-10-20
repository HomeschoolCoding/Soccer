tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
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
`, SpriteKind.Player)

mySprite.ay = 50

scene.cameraFollowSprite(mySprite)