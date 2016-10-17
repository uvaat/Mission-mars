import $ from 'jquery';
import Error from './Error';

class Game {

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

	setEvent(event){
		this.event = event;
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
	 * @return {Void}
	 */
	move(direction){

		let move = function(top, left){

			let position = this.robot.getNewPosition(top, left);

			let canGo = this.checkGround(position);

			if(!canGo){

				this.event.emit('move:error', new Error('On peut pas y aller..'));
				return;

			}

			this.robot.setNewPosition(position);
			
			if(this.checkTarget(position)){
				
				this.clearInterval();

				setTimeout(function(){

					console.log('you win');

				}, this.speed);

				return;

			}
			
			return;
				
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

	reset(){

		this.clearInterval();
		this.robot.reset();

		let start = this.ground.level.getStart();
		let position = this.robot.getNewPosition(start.top, start.left);

		this.robot.setNewPosition(position);

	}

	/**
	 * Lancer le tour
	 * @return {Void}
	 */
	go(){
		
		var index = 0;

		this.interval = setInterval(function(){

			let action = this.robot.getActions(index);
			
			if(!action){
				this.clearInterval();
				return;
			}

			this.doAction(action);

			index++;

		}.bind(this), this.speed);

		/** On attend l'event error pour recomancer un tour */
		this.event.on('move:error', function(error){

			this.reset();

		}.bind(this));

	}

}

export default Game;