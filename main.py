def Startlevel():
    global Count, Food1
    scene.set_background_color(randint(3, 7))
    Count = 0
    index = 0
    while index <= 10 + Level:
        Food1 = sprites.create(img("""
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
                """),
            SpriteKind.food)
        Food1.set_position(randint(20, 140), randint(20, 100))
        index += 1
    Player1.say_text("Level" + str(Level), 1000, False)
    info.start_countdown(20)

def on_on_overlap(sprite, otherSprite):
    global Count, Level
    Count += 1
    info.change_score_by(1)
    sprites.destroy(otherSprite)
    otherSprite.start_effect(effects.smiles, 200)
    if Count > 10 + Level:
        Level += 1
        music.play(music.melody_playable(music.jump_up),
            music.PlaybackMode.UNTIL_DONE)
        Startlevel()
    else:
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.UNTIL_DONE)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

Food1: Sprite = None
Count = 0
Player1: Sprite = None
Level = 0
game.splash("Hurry", "Eat the chicken ")
Level = 1
Player1 = sprites.create(img("""
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
        . f d d d d d d d f f f f .
        . . f d b d f d f . . . . .
        . . . f f f f f f . . . . .
        """),
    SpriteKind.player)
controller.move_sprite(Player1, 70, 70)
Startlevel()