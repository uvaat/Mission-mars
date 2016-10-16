import $ from 'jquery';

class Turn {

	constructor(ground, robot, target){

		this.ground = ground;
		this.robot = robot;
		this.target = target;

		this.speed = 500;

		this.ground.$ground.append(this.target.$target);

	}

	landingRobot(robot){

		this.robot.initDraw();

		let position = this.robot.getNewPosition(
			this.ground.level.startPosition[0], this.ground.level.startPosition[1]);

		this.robot.setNewPosition(position);
		this.ground.$ground.append(this.robot.$robot);

	}

	checkGround(position){

		return true;
		return this.ground.getSquare(position.top, position.left);

	}

	checkTarget(position){

		let target = this.target.position;
		if(target.top == position.top && target.left == position.left) return true;
		return false;

	}

	move(direction){

		var that = this;

		let move = function(top, left){

			let position = this.robot.getNewPosition(top, left);

			let canGo = this.checkGround(position);
			this.robot.setNewPosition(position);
			
			//if(this.checkTarget(position)) alert('win !');
			
			return true;
				
		}.bind(this);

		switch (direction) {

			case "top":
				move(-1, 0);
			break;
			case "right":
				move(0, 1);
			break;
			case "bottom":
				move(1, 0);
			break;
			case "left":
				move(0, -1);
			break;

		}

		return false;

	}

	doAction(action){		

		switch (action.type) {
			case "move": 
			    return this.move(action.direction);
			break;
		}

	}

	clearInterval(){
		clearInterval(this.interval);
	}

	go(){
		
		var index = 0;
		var that = this;
		this.interval = setInterval(function(){

			let action = that.robot.getActions(index);
			
			if(!action){
				that.clearInterval();
				return;
			}

			that.doAction(action);

			index++;

		}, this.speed);
		

	}

}

export default Turn;