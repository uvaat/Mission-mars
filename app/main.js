import $ from 'jquery';
import Area from './Area';
import Map from "./Map";
import Square from "./Square";
import Water from "./Water";
import Rock from "./Rock";
import Level from "./Level";
import Robot from "./Robot";

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

var level1 = new Level(bord_1, elements, [3, 0], 1);

/** Nouvelle map */
var map = new Map(level1);

/** Nouveau jeu */
var area = new Area(600, 'auto');

var robot = new Robot(level1.stepSize);

$(document).ready(function(){

	/** Initialisation du jeu */
	area.init();
	/** Dessin de la map */
	area.drawMap(map);
	/** lancer le robot */
	map.landingRobot(robot);

})

