controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onScore(100, function () {
    Player1.setImage(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        f f 2 2 2 2 2 2 b b f f d f 
        f d d d d d d d d b b d b f 
        f d d d d d d b d d f f f . 
        f f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
})
function Startlevel () {
    scene.setBackgroundColor(randint(3, 7))
    Count = 0
    for (let index = 0; index <= 10 + Level; index++) {
        Food1 = sprites.create(img`
            . . 2 2 b b b b b . . . . . . . 
            . 2 b 4 4 4 4 4 4 b . . . . . . 
            2 2 4 4 4 4 d d 4 4 b . . . . . 
            2 b 4 4 4 4 4 4 d 4 b . . . . . 
            2 b 4 4 4 4 4 4 4 d 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 e . . . . 
            2 2 b 4 4 4 4 4 4 4 b e . . . . 
            . 2 b b b 4 4 4 b b b e . . . . 
            . . e b b b b b b b e e . . . . 
            . . . e e b 4 4 b e e e b . . . 
            . . . . . e e e e e e b d b b . 
            . . . . . . . . . . . b 1 1 1 b 
            . . . . . . . . . . . c 1 d d b 
            . . . . . . . . . . . c 1 b c . 
            . . . . . . . . . . . . c c . . 
            `, SpriteKind.Food)
        Food1.setPosition(randint(20, 140), randint(20, 100))
    }
    Player1.sayText("Level" + Level, 1000, false)
    info.startCountdown(20)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Count += 1
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    otherSprite.startEffect(effects.smiles, 200)
    if (Count > 10 + Level) {
        Level += 1
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
        Startlevel()
    } else {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    game.setGameOverEffect(false, effects.slash)
})
let Food1: Sprite = null
let Count = 0
let Player1: Sprite = null
let Level = 0
game.splash("Hurry", "Eat the food to win")
game.splash("Hold A to start")
Level = 1
Player1 = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f f d d d d d f f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player1, 70, 70)
Startlevel()
