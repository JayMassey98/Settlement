class MenuScene extends Phaser.Scene {

    constructor() {

        super({ key: "MenuScene" });
    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.lightBeam = this.add.sprite(config.width / 2, config.height / 2 - 200, "lightBeam");
        this.lightBeam.setScale(2, 2);

        this.buttonPlay = this.add.sprite(config.width / 2, config.height / 2 + 200, "buttonPlay");
        this.buttonPlay.setInteractive();
        this.buttonPlay.setScale(2, 2);
        this.buttonPlay.on("pointerup", function() {this.scene.start("playScene"); }, this);

        this.buttonOptions = this.add.sprite(config.width / 2, config.height / 2 + 300, "buttonOptions");
        this.buttonOptions.setInteractive();
        this.buttonOptions.setScale(2, 2);
        this.buttonOptions.on("pointerup", function() {this.scene.start("optionsScene"); }, this);

    }

}
