var config = {

    type: Phaser.AUTO,
    width: 1920,
    height: 969,
    backgroundColor: 0x000000,
    scene: [LoadingScene, BootScene, PlayScene, EndScene, MenuScene, OptionsScene],
    physics: {default: "arcade"},
    pixelArt: true,
    playerSpeed: 300,
    enemySpawn: 1000,
    bulletTime: 500
    
}

var game = new Phaser.Game(config);
