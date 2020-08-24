class options extends Phaser.Scene {
    
    constructor() {
        
        super({ key: "options" });
    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.buttonBack = this.add.sprite(config.width / 2, config.height - 200, "buttonBack");

        this.buttonAttackUp = this.add.sprite(config.width / 2, config.height - 750, "buttonAttackUp");
        this.buttonAttackDown = this.add.sprite(config.width / 2, config.height - 650, "buttonAttackDown");

        this.buttonEnemyUp = this.add.sprite(config.width / 2, config.height - 500, "buttonEnemyUp");
        this.buttonEnemyDown = this.add.sprite(config.width / 2, config.height - 400, "buttonEnemyDown");

        this.buttonBack.setInteractive();
        this.buttonAttackUp.setInteractive();
        this.buttonAttackDown.setInteractive();
        this.buttonEnemyUp.setInteractive();
        this.buttonEnemyDown.setInteractive();
        
        this.buttonBack.setScale(2, 2);
        
        this.buttonBack.on("pointerup", function() {this.scene.start("menu"); }, this);
        this.buttonAttackUp.on("pointerup", function() {config.bulletTime += 100; }, this);
        this.buttonEnemyUp.on("pointerup", function() {config.enemySpawn += 100; }, this);

        this.buttonAttackDown.on("pointerup", function() {
            
            if(config.bulletTime > 100) {
                
                config.bulletTime -= 100;
            }
            
        }, this);

        this.buttonEnemyDown.on("pointerup", function() {
            
            if(config.enemySpawn > 100) {
                
                config.enemySpawn -= 100;
            }
            
        }, this);

    }

}
