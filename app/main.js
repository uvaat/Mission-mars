import MapArea from './MapArea';
import ActionsArea from './ActionsArea';
import ControlsArea from './ControlsArea';
import GoToGame from './GoToGame';
import Rock from './Rock';
import Move from './Move';
import Level from './Level';
import Ground from './Ground';
import Robot from './Robot';
import Mission from './Mission';
import Ui from './Ui';

var levelIndex = 0;

/** Matrices pour créer la map */
var matrice_1 = [
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
];

var matrice_2 = [
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
	[1,0],[1,0],[1,0],[1,0],[1,0],
];

var matrices = [
	matrice_1,
	matrice_2,
];

var gameTypes = [
	new GoToGame({x : 0, y: 0}, {x : 1, y : 1}),
	new GoToGame({x : 0, y: 0}, {x : 3, y : 3})
]

/** Éléments */
var elements = [
	new Rock()
];

/** Les actions possibles */
var controls = [
	new Move('top'),
	new Move('right'),
	new Move('bottom'),
	new Move('left')
];

var mapArea = null;
var actionsArea = null;
var controlsArea = null;

var gamefunction = function(){

	let matriceSize = 5;
	let step = (Ui.getWindowHeight() - (Ui.getWindowHeight() / 100 * 40)) / matriceSize;

	let matrice = matrices[levelIndex];

	/** Nouveau level */
	let level = new Level(step, elements, controls, matrice, matriceSize);

	/** Terrain */
	let ground = new Ground(level);

	/** Robot */
	let robot = new Robot(level);
	
	/** Type de jeux */
	let gameType = gameTypes[levelIndex];

	/** La mission */
	let mission = new Mission(
		level,
		ground,
		robot,
		gameType,
		gamefunction);

	mission.initGround(mapArea.$elem);
	mission.initControls(controlsArea.$elem);
	mission.initActions(actionsArea);

	levelIndex++;

}

Ui.documentReady(function(){

	mapArea = new MapArea();
	actionsArea = new ActionsArea();
	controlsArea = new ControlsArea();

	gamefunction();

})