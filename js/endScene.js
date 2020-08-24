class EndScene extends Phaser.Scene {
    
    constructor() {
        
        super({ key: "endScene" });
    }

    create(){

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        
        this.restartButton = this.add.sprite(config.width / 2, config.height / 2, "buttonRestart");
        this.restartButton.setInteractive();
        this.restartButton.setScale(2, 2);
        
        this.restartButton.on("pointerup", function() { this.scene.start("menuScene"); }, this);

        this.title = this.add.text(30, 30, "Game Over.", {
            fontFamily: 'monospace',
            fontSize: 40,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        
        this.title.setOrigin(0, 0);

    }

}
