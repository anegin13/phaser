
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

	game.load.image('chunk', 'assets/sprites/chunk.png');
	game.load.image('arrow', 'assets/sprites/asteroids_ship.png');
	game.load.image('p', 'assets/sprites/mushroom2.png');
	game.load.image('ball', 'assets/sprites/shinyball.png');

}

var sprite;
var sprite2;

var track;
var bmd;

function create() {

	game.stage.backgroundColor = '#124184';

	bmd = game.add.bitmapData(800, 600);
	bmd.fillStyle('#ffffff');
	var bg = game.add.sprite(0, 0, bmd);
	bg.body.moves = false;

	test8();

}

//	gravity into floor jiggle
function test8() {

	game.physics.gravity.y = 150;

	sprite = game.add.sprite(400, 600-100, 'ball');
	sprite.body.moves = false;
	sprite.body.collideWorldBounds = true;
	sprite.body.bounce.setTo(0.8, 0.8);

	sprite2 = game.add.sprite(500, 100, 'ball');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.5, 0.5);
	// sprite2.body.friction = 0.1;
	// sprite2.body.canSleep = true;

	track = sprite2;

	game.input.onDown.add(launch8, this);

}

function launch8() {

	sprite.body.velocity.y = -200;
	// sprite2.body.velocity.y = 200;

}

//	both sprites are shot into each other vertically
function test7() {

	// game.physics.gravity.y = 50;

	sprite = game.add.sprite(400, 600, 'ball');
	sprite.body.collideWorldBounds = true;
	sprite.body.bounce.setTo(0.8, 0.8);

	sprite2 = game.add.sprite(400, 100, 'ball');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.8, 0.8);

	track = sprite2;

	game.input.onDown.add(launch7, this);

}

function launch7() {

	sprite.body.velocity.y = -200;
	// sprite2.body.velocity.y = 200;

}


//	sprite is on the bottom, blocked by the world bounds, sprite2 falls onto it via gravity only
function test6() {

	game.physics.gravity.y = 100;

	sprite = game.add.sprite(380, 600, 'p');
	sprite.body.collideWorldBounds = true;

	sprite2 = game.add.sprite(400, 100, 'ball');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.8, 0.8);

	track = sprite2;

}

//	sprite is on the bottom, blocked by the world bounds, sprite2 falls onto it
function test5() {

	game.physics.gravity.y = 50;

	sprite = game.add.sprite(400, 600, 'ball');
	sprite.body.collideWorldBounds = true;

	sprite2 = game.add.sprite(400, 100, 'ball');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.8, 0.8);

	track = sprite2;

	game.input.onDown.add(launch5, this);

}

function launch5() {

	sprite2.body.velocity.y = 200;

}


//	bounce both sprites into each other, one with lots less velocity - checking newtons craddle approach
function test4() {

	game.physics.gravity.y = 100;

	sprite = game.add.sprite(780, 400, 'ball');
	sprite.body.collideWorldBounds = true;
	sprite.body.bounce.setTo(0.8, 0.8);

	sprite2 = game.add.sprite(0, 400, 'ball');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.8, 0.8);

	track = sprite2;

	game.input.onDown.add(launch4, this);

}

function launch4() {

	sprite.body.velocity.x = 70;
	sprite2.body.velocity.x = -250;

}

//	bounce both sprites into each other, identical bounce + velocity
function test3() {

	game.physics.gravity.y = 100;

	sprite = game.add.sprite(780, 400, 'p');
	sprite.body.collideWorldBounds = true;
	sprite.body.bounce.setTo(0.8, 0.8);

	sprite2 = game.add.sprite(0, 400, 'p');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.8, 0.8);

	track = sprite2;

	game.input.onDown.add(launch3, this);

}

function launch3() {

	sprite.body.velocity.x = 225;
	sprite2.body.velocity.x = -225;

}

//	sprite is on the right, blocked by the world bounds, sprite2 bounces into it
function test2() {

	game.physics.gravity.y = 100;

	sprite = game.add.sprite(780, 400, 'p');
	sprite.body.collideWorldBounds = true;

	sprite2 = game.add.sprite(0, 400, 'p');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.8, 0.8);

	track = sprite2;

	game.input.onDown.add(launch2, this);

}

function launch2() {

	sprite2.body.velocity.x = -225;

}

//	sprite is on the left, blocked by the world bounds, sprite2 bounces into it
function test1() {

	game.physics.gravity.y = 100;

	sprite = game.add.sprite(0, 400, 'p');
	sprite.body.collideWorldBounds = true;

	sprite2 = game.add.sprite(700, 400, 'p');
	sprite2.body.collideWorldBounds = true;
	sprite2.body.bounce.setTo(0.8, 0.8);

	track = sprite2;

	game.input.onDown.add(launch1, this);

}

function launch1() {

	sprite2.body.velocity.x = -225;

}

function update() {

	game.physics.collide(sprite, sprite2);

	// sprite.rotation = sprite.body.angle;

	bmd.fillStyle('#ffff00');
	bmd.fillRect(track.body.center.x, track.body.center.y, 2, 2);

}

function render() {

	game.debug.renderBodyInfo(sprite, 16, 24);
	game.debug.renderBodyInfo(sprite2, 16, 190);

}
