class BootScene extends Phaser.Scene {

    preload() {

        this.load.image("lightBeam", "assets/images/lightBeam.png");
        this.load.image("background", "assets/images/background.png");
        this.load.image("buttonPlay", "assets/images/buttonPlay.png");
        this.load.image("buttonOptions", "assets/images/buttonOptions.png");
        
        this.load.image("buttonAttackUp", "assets/images/buttonAttackUp.png");
        this.load.image("buttonAttackDown", "assets/images/buttonAttackDown.png");
        this.load.image("buttonEnemyUp", "assets/images/buttonEnemyUp.png");
        this.load.image("buttonEnemyDown", "assets/images/buttonEnemyDown.png");
        
        this.load.image("buttonBack", "assets/images/buttonBack.png");
        this.load.image("buttonRestart", "assets/images/buttonRestart.png");
        
        //
        // Enemy Ship Sprites
        //

        this.load.spritesheet("ship", "assets/spritesheets/ship.png", {

            frameWidth: 16,
            frameHeight: 16
            
        });

        this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {

            frameWidth: 32,
            frameHeight: 16
            
        });

        this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {

            frameWidth: 32,
            frameHeight: 32
            
        });
        
        this.load.spritesheet("ship4", "assets/spritesheets/ship4.png", {

            frameWidth: 16,
            frameHeight: 16
            
        });

        this.load.spritesheet("ship5", "assets/spritesheets/ship5.png", {

            frameWidth: 32,
            frameHeight: 16
            
        });

        this.load.spritesheet("ship6", "assets/spritesheets/ship6.png", {

            frameWidth: 32,
            frameHeight: 32
            
        });
        
        this.load.spritesheet("ship7", "assets/spritesheets/ship7.png", {

            frameWidth: 16,
            frameHeight: 16
            
        });

        this.load.spritesheet("ship8", "assets/spritesheets/ship8.png", {

            frameWidth: 32,
            frameHeight: 16
            
        });

        this.load.spritesheet("ship9", "assets/spritesheets/ship9.png", {

            frameWidth: 32,
            frameHeight: 32
            
        });
        
        //
        // Other Sprites
        //

        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {

            frameWidth: 16,
            frameHeight: 16
            
        });

        this.load.spritesheet("player", "assets/spritesheets/player.png", {

            frameWidth: 16,
            frameHeight: 24
            
        });

        this.load.spritesheet("beam", "assets/spritesheets/beam.png", {

            frameWidth: 16,
            frameHeight: 16
            
        });

        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

        this.load.audio("audio_beam", ["assets/sounds/beam.ogg", "assets/sounds/beam.mp3"]);
        this.load.audio("audio_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"]);
        this.load.audio("music", ["assets/sounds/ambientSpaceMusic.ogg", "assets/sounds/ambientSpaceMusic.mp3"]);
        
    }

    create() {
        
        this.lightBeam = this.add.sprite(config.width / 2, config.height / 2 - 200, "lightBeam");
        this.lightBeam.setScale(2, 2);

        this.anims.create({
        
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship4_anim",
            frames: this.anims.generateFrameNumbers("ship4"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship5_anim",
            frames: this.anims.generateFrameNumbers("ship5"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship6_anim",
            frames: this.anims.generateFrameNumbers("ship6"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship7_anim",
            frames: this.anims.generateFrameNumbers("ship7"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship8_anim",
            frames: this.anims.generateFrameNumbers("ship8"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.anims.create({
        
            key: "ship9_anim",
            frames: this.anims.generateFrameNumbers("ship9"),
            frameRate: 20,
            repeat: -1
            
        });

        this.anims.create({
        
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
            
        });
        
        this.anims.create({
        
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
            
        });

        this.anims.create({
        
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
            
        });
        
        this.scene.start("MenuScene");
    }
}
