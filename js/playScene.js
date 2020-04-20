class playScene extends Phaser.Scene {

    constructor() {

        super("playGame");

    }

    create() {

        // Background

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        
        // Input
        
        this.input.on('gameobjectdown', this.destroyShip, this);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        // Graphics

        var graphics = this.add.graphics();
        
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0, 0);
        graphics.lineTo(config.width, 0);
        graphics.lineTo(config.width, 20);
        graphics.lineTo(0, 20);
        graphics.lineTo(0, 0);

        graphics.closePath();
        graphics.fillPath();

        this.score = 0;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel = this.add.bitmapText(10, 6, "pixelFont", "SCORE" + scoreFormated, 16);
        
        // Sound

        this.music = this.sound.add("music");

        var musicConfig = {
        
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
            
        }

        this.music.play(musicConfig);

    }
    
    // Score Layout
    
    zeroPad(number, size) {
    
        var stringNumber = String(number);
        while (stringNumber.length < (size || 2)) {
        
            stringNumber = "0" + stringNumber;
            
        }
        
        return stringNumber;
        
    }
    
    update() {
        
    }
    
}