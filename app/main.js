import $ from 'jquery';
import Area from './Area';
import Ground from "./Ground";
import Square from "./Square";
import Water from "./Water";
import Rock from "./Rock";
import Level from "./Level";
import Robot from "./Robot";
import EventEmitter from "./EventEmitter";

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
var level1 = new Level(bord_1, elements, [3, 0], 1);

/** Nouvelle map */
var ground = new Ground(level1);
ground.setEvent(eventEmitter);

/** Nouveau jeu */
var area = new Area(600, 'auto');

/** Nouveau Robot */
var robot = new Robot(level1.stepSize);
robot.setEvent(eventEmitter);

var actionsRobot = [
	{type : 'move', direction : 'right'},
	{type : 'move', direction : 'right'},
	{type : 'move', direction : 'right'},
	{type : 'move', direction : 'top'},
	{type : 'move', direction : 'top'},
	{type : 'move', direction : 'top'},
	{type : 'move', direction : 'left'},
	{type : 'move', direction : 'left'},
	{type : 'move', direction : 'left'},
	{type : 'move', direction : 'bottom'},
	{type : 'move', direction : 'right'},
	{type : 'move', direction : 'right'},
	{type : 'move', direction : 'bottom'},
	{type : 'move', direction : 'left'}
]

$(document).ready(function(){

	/** Initialisation du jeu */
	area.init();
	/** Dessin de la map */
	area.drawMap(ground);
	/** lancer le robot */
	ground.landingRobot(robot);

	robot.setAction(actionsRobot);
	robot.go();

})

