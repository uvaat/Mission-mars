import $ from 'jquery';
import Area from './Area';
import Ground from "./Ground";
import Square from "./Square";
import Water from "./Water";
import Rock from "./Rock";
import Level from "./Level";
import Robot from "./Robot";
import EventEmitter from "./EventEmitter";
import Game from "./Game";
import Target from "./Target";

/** Event */
var eventEmitter = new EventEmitter();

/** Création des éléments */
var elements = [
	new Rock(),
	new Water()
];

/** Création du niveau */
var bord_1 = [
	[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,1],[1,0],
	[1,0],[1,1],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],
];

/** Création du level */
var level1 = new Level(bord_1, elements, [3, 0], [2, 1], 1);

/** Target */
var target = new Target(level1);

/** Nouvelle map */
var ground = new Ground(level1);
ground.setEvent(eventEmitter);

/** Nouveau Robot */
var robot = new Robot(level1);
robot.setEvent(eventEmitter);


var actionsRobot = [
	{type : 'move', direction : 'right'},
	{type : 'move', direction : 'right'},
	{type : 'move', direction : 'bottom'}
];

/** Nouveau jeu */
var area = new Area(600, 'auto');

$(document).ready(function(){

	/** Initialisation du jeu */
	area.init();
	/** Dessin de la map */
	area.drawMap(ground, target);

	/** Nouveau tour */
	var game = new Game(ground, robot, target);
	game.setEvent(eventEmitter);

	/** lancer le robot */
	game.landingRobot();

	$('#go').click(function(){
		
		/** Ajouter les actions au robot */
		robot.setAction(actionsRobot);

		/** Lancer le tour */
		game.go();

	})

})

