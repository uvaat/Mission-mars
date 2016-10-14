import $ from 'jquery';

class Robot {

	constructor(step, cssClass = 'robot'){

		this.cssClass = cssClass;
		this.step = step;
		this.style = {
			background : '#34495e',
			position : 'absolute',
			width : step,
			height : step,
		}

	}

	setAction(actions){

		this.actions = actions;

	}

	go(){

		for(var i in this.actions){
			
		}

	}

	initDraw(){

		this.$robot = $('<div></div>');
		this.$robot.addClass(this.cssClass);
		this.$robot.css(this.style);

	}

	setPosition(nbStepTop, nbStepLeft){

		if(!this.$robot) this.initDraw();
		this.$robot.css({
			top : this.step * nbStepTop,
			left : this.step * nbStepLeft
		});

	}

	move(nbStepTop, nbStepLeft){



	}

}

export default Robot;