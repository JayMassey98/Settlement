class bootScene extends Phaser.Scene {

    constructor() {

        super("bootGame");

    }

    preload() {
        
        this.add.text(30, 30, "Loading Game...");

        this.load.image("background", "assets/images/background.png");
        
        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

        this.load.audio("music", ["assets/sounds/music.ogg", "assets/sounds/music.mp3"]);
        
    }

    create() {
        
        this.scene.start("playGame");

    }
}