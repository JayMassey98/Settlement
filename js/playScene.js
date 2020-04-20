class playScene extends Phaser.Scene {

    constructor() {

        super("playGame");

    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        
        // Setting up Enemies

        this.ship1 = this.add.sprite(config.width / 2 - 150, config.height / 2 - 200, "ship");
        this.ship2 = this.add.sprite(config.width / 2, config.height / 2 - 200, "ship2");
        this.ship3 = this.add.sprite(config.width / 2 + 150, config.height / 2 - 200, "ship3");
        
        this.ship4 = this.add.sprite(config.width / 2 - 100, config.height / 2 - 100, "ship4");
        this.ship5 = this.add.sprite(config.width / 2, config.height / 2 - 100, "ship5");
        this.ship6 = this.add.sprite(config.width / 2 + 100, config.height / 2 - 100, "ship6");
        
        this.ship7 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship7");
        this.ship8 = this.add.sprite(config.width / 2, config.height / 2, "ship8");
        this.ship9 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship9");

        this.enemies = this.physics.add.group();
        
        this.enemies.add(this.ship1);
        this.enemies.add(this.ship2);
        this.enemies.add(this.ship3);
        this.enemies.add(this.ship4);
        this.enemies.add(this.ship5);
        this.enemies.add(this.ship6);
        this.enemies.add(this.ship7);
        this.enemies.add(this.ship8);
        this.enemies.add(this.ship9);

        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");
        this.ship4.play("ship4_anim");
        this.ship5.play("ship5_anim");
        this.ship6.play("ship6_anim");
        this.ship7.play("ship7_anim");
        this.ship8.play("ship8_anim");
        this.ship9.play("ship9_anim");

        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();
        this.ship4.setInteractive();
        this.ship5.setInteractive();
        this.ship6.setInteractive();
        this.ship7.setInteractive();
        this.ship8.setInteractive();
        this.ship9.setInteractive();
        
        this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "player");
        this.player.play("thrust");
        this.player.setCollideWorldBounds(true);
        this.projectiles = this.add.group();
        
        // Input
        
        this.input.on('gameobjectdown', this.destroyShip, this);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        // Physics

        this.physics.world.setBoundsCollision();
        this.physics.add.collider(this.projectiles, function (projectile) { projectile.destroy(); });
        this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
        this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);
        
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

        this.beamSound = this.sound.add("audio_beam");
        this.explosionSound = this.sound.add("audio_explosion");
        this.pickupSound = this.sound.add("audio_pickup");
        this.music = this.sound.add("music");
        var musicConfig = {
        
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
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
    
    // Player Functions

    hurtPlayer(player, enemy) {

        this.resetShipPos(enemy);

        if (this.player.alpha < 1) {
        
            return;
            
        }

        var explosion = new Explosion(this, player.x, player.y);

        player.disableBody(true, true);

        this.time.addEvent({
        
            delay: 1000,
            callback: this.resetPlayer,
            callbackScope: this,
            loop: false
            
        });
    }

    resetPlayer() {
        
        this.score = 0;
        
        var x = config.width / 2 - 8;
        var y = config.height + 64;
        this.player.enableBody(true, x, y, true, true);

        this.player.alpha = 0.5;

        var tween = this.tweens.add({
        
            targets: this.player,
            y: config.height - 64,
            ease: 'Power1',
            duration: 1500,
            repeat: 0,
            onComplete: function () {
            
                this.player.alpha = 1;
            },
            
            callbackScope: this
            
        });
    }

    hitEnemy(projectile, enemy) {

        var explosion = new Explosion(this, enemy.x, enemy.y);

        projectile.destroy();
        this.resetShipPos(enemy);
        this.score += 15;

        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;

        this.explosionSound.play();
        
    }
    
    update() {

        this.moveShip(this.ship1, 3 * ((this.score / 150) + 1));
        this.moveShip(this.ship2, 3 * ((this.score / 150) + 1));
        this.moveShip(this.ship3, 3 * ((this.score / 150) + 1));
        this.moveShip(this.ship4, 4 * ((this.score / 150) + 1));
        this.moveShip(this.ship5, 4 * ((this.score / 150) + 1));
        this.moveShip(this.ship6, 4 * ((this.score / 150) + 1));
        this.moveShip(this.ship7, 5 * ((this.score / 150) + 1));
        this.moveShip(this.ship8, 5 * ((this.score / 150) + 1));
        this.moveShip(this.ship9, 5 * ((this.score / 150) + 1));

        this.background.tilePositionY -= 1 * ((this.score / 60) + 1);

        this.movePlayerManager();

        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
        
            if (this.player.active) {
            
                this.shootBeam();
            }
            
        }
        
        for (var i = 0; i < this.projectiles.getChildren().length; i++) {
        
            var beam = this.projectiles.getChildren()[i];
            beam.update();
            
        }

    }

    shootBeam() {
    
        var beam = new Beam(this);
        this.beamSound.play();
        
    }

    movePlayerManager() {

        this.player.setVelocity(0);

        if (this.cursorKeys.left.isDown || Phaser.Input.Keyboard.JustDown(this.A)) {
        
            this.player.setVelocityX(-config.playerSpeed);
            
        } else if (this.cursorKeys.right.isDown || Phaser.Input.Keyboard.JustDown(this.D)) {
        
            this.player.setVelocityX(config.playerSpeed);
            
        }

        if (this.cursorKeys.up.isDown || Phaser.Input.Keyboard.JustDown(this.W)) {
        
            this.player.setVelocityY(-config.playerSpeed);
            
        } else if (this.cursorKeys.down.isDown || Phaser.Input.Keyboard.JustDown(this.S)) {
        
            this.player.setVelocityY(config.playerSpeed);
            
        }
        
    }
    
    // Ship Functions

    moveShip(ship, speed) {
    
        ship.y += speed;
        ship.x += ((Phaser.Math.Between(-1, 1) * (speed - 3)) / 4);
        if (ship.y > config.height) { this.resetShipPos(ship); }
        
    }

    resetShipPos(ship) {
    
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
        
    }

    destroyShip(pointer, gameObject) {
    
        gameObject.setTexture("explosion");
        gameObject.play("explode");
        
    }
    
}