import $ from 'jquery';
import Square from "./Square";

class Map {

	constructor(level, cssClass = 'map'){

		this.level = level;
		this.cssClass = cssClass;
		this.squares = [];

		for(var i in this.level.bord){
			var element = this.level.elements[this.level.bord[i][1]];
			var square = new Square(this.level.bord[i][0], element, this.level.stepSize);
			this.squares.push(square);
		}

	}

	landingRobot(robot){

		robot.initDraw();

		robot.setPosition(this.level.startPosition[0], this.level.startPosition[1]);

		this.robot = robot;
		this.$map.append(this.robot.$robot);

	}

	draw($area){

		this.$map = $('<div></div>');
		this.$map.addClass(this.cssClass);

		for(var i in this.squares){
			this.squares[i].draw(this.$map);
		}

		$area.html(this.$map);

	}

}

export default Map;