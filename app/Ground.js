import $ from 'jquery';
import Square from "./Square";

class Ground {

	constructor(level, cssClass = 'ground'){

		this.level = level;
		this.cssClass = cssClass;
		this.squares = {};

		var index_top = 0;
		var index_left = -1;

		for(var i in this.level.bord){

			var element = this.level.elements[this.level.bord[i][1]];
			var square = new Square(this.level.bord[i][0], element, this.level.stepSize);

			if(index_left < this.level.leftMax -1){
				index_left ++;
			}else{
				index_left = 0;
				index_top++;
			}

			this.squares[ index_top + '_' + index_left ] = square;


		}

	}

	setEventEmitter(event){
		this.event = event;
	}

	landingRobot(robot){

		robot.initDraw();
		
		this.event.on('robot:checkground', function(position){

			var positionToCkeck = position.top + '_' + position.left;

			if(this.squares[positionToCkeck]){
				this.event.emit('ground:robotcanmove', {position : position});
			}else{
				this.event.emit('ground:robotcantmove', {response : 'KO'});
			}

		}.bind(this));

		robot.setNewPosition(this.level.startPosition[0], this.level.startPosition[1]);

		this.robot = robot;
		this.$ground.append(this.robot.$robot);

	}

	draw($area){

		this.$ground = $('<div></div>');
		this.$ground.addClass(this.cssClass);

		for(var i in this.squares){
			this.squares[i].draw(this.$ground);
		}

		$area.html(this.$ground);

	}

}

export default Ground;