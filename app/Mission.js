import Go from './Go';

class Mission {

	constructor(level, ground, robot, gameType, callBackWin){

		this.level = level;
		this.ground = ground;
		this.robot = robot;
		this.gameType = gameType;
		this.actionArea = null;
		this.missionInProgress = false;
		this.go = new Go();
		this.go.click(this.goMission.bind(this));
		this.isWin = false;
		this.callBackWin = callBackWin;

	}

	clearInterval(){
		
		this.missionInProgress = false;
		clearInterval(this.interval);
		if(!this.isWin){
			this.actionArea.reset();
			this.robot.setPosition(this.gameType.startPosition);
		}

	}

	goMission(){

		if(!this.actionArea.actions || this.missionInProgress) return;
		this.missionInProgress = true;

		var index = -1;
		var actions = this.actionArea.actions;

		this.interval = setInterval(function(){

			index++;

			let action = actions[index];

			if(!action){
				this.clearInterval();
				return;
			}


			action.addClass('active');

			if(action.name == 'move'){

				// On check si le robot peux aller sur la case
				var nextPostion = this.robot.getNextPosition(action.direction);
				let positionIsOk = this.ground.checkGround(nextPostion.x, nextPostion.y);

				if(positionIsOk){
				
					this.robot.setPosition(nextPostion);
					this.isWin = this.gameType.isWin(nextPostion);
					if(this.isWin){

						setTimeout(function(){

							this.clearInterval();
							this.callBackWin();

						}.bind(this), 1000);
						
					}
				
				}else{
					
					this.clearInterval();
					return;
				
				}

			}

		}.bind(this), 1000);

	}

	initGround($parent){

		this.ground.setParent($parent);

		this.ground.setObjective(this.gameType.objectivePosition);
		
		this.ground.appendToParent();
		this.robot.setPosition(this.gameType.startPosition);
		this.robot.landing(this.ground.$elem);

	}

	addAction(action){

		this.actionArea.addAction(action);

	}

	initControls($parent){

		for(let i in this.level.controls){
			let action = this.level.controls[i];
			action.setParent($parent);
			action.appendToParent($parent);
			action.click(this.addAction.bind(this));
		}

	}

	initActions(actionArea){
		this.actionArea = actionArea;
	}


}

export default Mission;