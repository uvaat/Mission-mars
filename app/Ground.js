import $ from 'jquery';
import Square from "./Square";

class Ground {

	constructor(level, cssClass = 'ground'){

		this.level = level;
		this.cssClass = cssClass;
		this.squares = {};

		var indexTop = 0;
		var indexLeft = -1;

		for(var i in this.level.bord){

			let element = this.level.elements[this.level.bord[i][1]];
			let square = new Square(this.level.bord[i][0], element, this.level.step);

			if(indexLeft < this.level.leftMax -1){
				indexLeft ++;
			}else{
				indexLeft = 0;
				indexTop++;
			}

			let key = this.getSquareKey(indexLeft, indexTop);
			this.squares[key] = square;


		}

	}

	getSquare(indexTop, indexLeft){
		let key = this.getSquareKey(indexLeft, indexTop);
		return this.squares[key];
	}

	getSquareKey(indexTop, indexLeft){
		return  indexTop + '_' + indexLeft;
	}

	setEvent(event){
		this.event = event;
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