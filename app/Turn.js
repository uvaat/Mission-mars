import $ from 'jquery';

class Turn {

	/**
	 * Tour de jeux
	 * @param  {Groud} ground (la map)
	 * @param  {Robot} robot  (le robot)
	 * @param  {Target} target (la cible du robot)
	 * @return {Void}
	 */
	constructor(ground, robot, target){

		this.ground = ground;
		this.robot = robot;
		this.target = target;

		this.speed = 500;

		this.ground.$ground.append(this.target.$target);

	}

	/**
	 * Déposer le robot du la map
	 * @return {Void}
	 */
	landingRobot(){

		this.robot.initDraw();

		let start = this.ground.level.getStart();
		let position = this.robot.getNewPosition(start.top, start.left);

		this.robot.setNewPosition(position);
		this.ground.$ground.append(this.robot.$robot);

	}

	/**
	 * Vérifier la case de la map
	 * @param  {Json} position
	 * @return {Bool}
	 */
	checkGround(position){

		return this.ground.getSquare(position.top, position.left);

	}

	/**
	 * Verifier si la position est la même que la cible à attendre
	 * @param  {Json} position
	 * @return {Bool}
	 */
	checkTarget(position){

		let target = this.target.position;
		return (target.top == position.top && target.left == position.left);

	}

	/**
	 * Action bouger
	 * @param  {String} direction (la direction que doit prendre le robot)
	 * @return {Bool}
	 */
	move(direction){

		let move = function(top, left){

			let position = this.robot.getNewPosition(top, left);

			let canGo = this.checkGround(position);

			if(!canGo){

				this.clearInterval();
				
				console.log('you loose');

				return false;

			}

			this.robot.setNewPosition(position);
			
			if(this.checkTarget(position)){
				
				this.clearInterval();

				setTimeout(function(){
					console.log('you win');
				}, this.speed);

				return false;

			}
			
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

	/**
	 * Actionner un action du robot
	 * @param  {Json} action
	 * @return {Bool}
	 */
	doAction(action){		

		switch (action.type) {
			case "move": 
			    return this.move(action.direction);
			break;
		}

	}

	/**
	 * Reset le tour
	 * @return {Interval}
	 */
	clearInterval(){
		clearInterval(this.interval);
	}

	/**
	 * Lancer le tour
	 * @return {Void}
	 */
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