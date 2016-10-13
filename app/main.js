import $ from 'jquery';
import Area from './Area';
import Map from "./Map";
import Square from "./Square";
import Water from "./Water";
import Rock from "./Rock";

/** Création des éléments */
var Elements = [
	new Rock(),
	new Water()
];

/** Création du niveau */
var level_1 = [
	[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,1],[1,0],
	[1,0],[1,1],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],
];

/** Définition des squares à importer dans la map */
var squares = [];

/** Création de la map */
for(var i in level_1){
	var element = Elements[level_1[i][1]];
	var square = new Square(level_1[i][0], element);
	squares.push(square);
}

/** Nouvelle map */
var map = new Map(squares);

/** Nouveau jeu */
var area = new Area(600, 'auto');

$(document).ready(function(){

	/** Initialisation du jeu */
	area.init();
	/** Dessin de la map */
	area.drawMap(map);

})

