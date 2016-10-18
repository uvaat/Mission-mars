import $ from 'jquery';

class Robot{

	constructor(level, cssClass = 'robot'){

		console.log(level);
		
		this.cssClass = cssClass;
		this.level = level;
		this.style = {
			background : '#34495e',
			position : 'absolute',
			width : level.step,
			height : level.step,
		};

		this.currentPosition = {top : 0, left : 0};

	}

	setEvent(event){
		this.event = event;
	}

	setAction(actions){
		this.actions = actions;
	}

	getActions(index){
		return this.actions[index];
	}

	reset(){
		this.actions = {};
		this.currentPosition = {top : 0, left : 0};
	}

	initDraw(){

		this.$robot = $('<div></div>');
		this.$robot.addClass(this.cssClass);
		this.$robot.css(this.style);

	}

	getNewPosition(nbStepTop, nbStepLeft){

		let newleft = 0;
		let newtop = 0;

		if(nbStepTop !== 0)
			newtop = nbStepTop + this.currentPosition.top;
		else 
			newtop = this.currentPosition.top;

		if(nbStepLeft !== 0)
			newleft = nbStepLeft + this.currentPosition.left;
		else
			newleft = this.currentPosition.left;
	
		return {
			top : newtop,
			left : newleft
		};
	
	}

	setNewPosition(position){
		
		if(!this.$robot) this.initDraw();

		this.currentPosition = position;

		this.$robot.css({
			top : this.currentPosition.top * this.level.step,
			left : this.currentPosition.left * this.level.step,
		});

	}


}

export default Robot;