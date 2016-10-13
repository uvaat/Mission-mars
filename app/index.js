import Bord from "./Bord";
import Square from "./Square";

var level_1 = [
	[1,1],[1,1],[1,1],[1,1],
	[1,1],[1,2],[1,8],[1,1],
	[1,1],[1,1],[1,1],[1,1],
	[1,1],[1,1],[1,1],[1,1],
];

var squares = [];

for(var i in level_1){
	var square = new Square(level_1[i][0], level_1[i][1]);
	squares.push(square);
}

var bord = new Bord(squares);
bord.drawBord();