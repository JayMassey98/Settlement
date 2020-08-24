class LoadingScene extends Phaser.Scene {

    constructor() {

        super("loadingScene");

    }

    preload() {

        this.load.spritesheet("loading_bar", "assets/spritesheets/loading_bar.png", {

            frameWidth: 208,
            frameHeight: 13

        });

    }

    create() {

        this.anims.create({

            key: "loading_bar_anims",
            frames: this.anims.generateFrameNumbers("loading_bar"),
            frameRate: 60,
            repeat: -1

        });

        this.loadingBar = this.add.sprite(config.width / 2, config.height / 2, "loading_bar");
        this.loadingBar.play("loading_bar_anims");

        this.scene.add("bootScene", BootScene);
        this.scene.launch("bootScene");
    }

}
