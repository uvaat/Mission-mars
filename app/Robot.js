import $ from 'jquery';

class Robot{

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

	setEventEmitter(eventEmitter){

		this.eventEmitter = eventEmitter;

		this.eventEmitter.on('ground:robotcanmove', function(response){

			this.currentPosition = response.position;

			this.$robot.css({
				top : this.currentPosition.top * this.step,
				left : this.currentPosition.left * this.step,
			});

		}.bind(this));

	}

	setAction(actions){
		this.actions = actions;
	}

	go(){
		
		let that = this;

		setTimeout(function(){

			for(var i in that.actions){

				let action = that.actions[i];

				(function(that, action, i){

					setTimeout(function(){ 
						
						that.doAction(action);

					}, 1000 * i);

				})(that, action, i)
				
			}

		}, 1000);

	}

	initDraw(){

		this.$robot = $('<div></div>');
		this.$robot.addClass(this.cssClass);
		this.$robot.css(this.style);

	}

	checkNewPosition(nbStepTop, nbStepLeft){

		if(!this.currentPosition) this.currentPosition = {top: 0, left : 0};

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

		this.eventEmitter.emit('robot:checkground', {top : newtop, left : newleft});
		
	
	}

	setNewPosition(nbStepTop, nbStepLeft){

		if(!this.$robot) this.initDraw();
		this.checkNewPosition(nbStepTop, nbStepLeft);

	}

	move(direction){

		switch (direction) {

			case "top":
				this.setNewPosition(-1, 0);
			break;
			case "right":
				this.setNewPosition(0, 1);
			break;
			case "bottom":
				this.setNewPosition(1, 0);
			break;
			case "left":
				this.setNewPosition(0, -1);
			break;

		}

	}

	doAction(action){

		switch (action.type) {
			case "move": 
			    return this.move(action.direction);
			break;
		}

	}

}

export default Robot;