import Ui from './Ui';

class Robot extends Ui{

	constructor(level){
		
		super({
			background : '#2B4162',
			width : level.step,
			height : level.step,
			position : 'absolute'
		});

		super.uicreate({ id : 'robot' });
		this.actions = [];
		this.level = level;
		this.currentPosition = {x : 0, y : 0};

	}

	setPosition(position){

		this.currentPosition = position;
		this.$elem.css({
			top : position.y * this.level.step,
			left : position.x * this.level.step
		})

	}

	getCurrentPosition(){
		return this.currentPosition;
	}

	getNextPosition(direction){

		switch (direction) {

			case "top":
				return { x : this.currentPosition.x , y : this.currentPosition.y - 1};
			break;
			case "right":
				return { x : this.currentPosition.x + 1 , y : this.currentPosition.y};
			break;
			case "bottom":
				return { x : this.currentPosition.x , y : this.currentPosition.y + 1};
			break;
			case "left":
				return { x : this.currentPosition.x -1 , y : this.currentPosition.y};
			break;

		}
			
	}

	landing($parent){

		super.setParent($parent);
		super.appendToParent();

	}

	move(direction){

	}


}

export default Robot;