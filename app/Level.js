class Level {

	constructor(bord, elements, startPosition, targetPosition, level){

		this.level = level;
		this.bord = bord;
		this.elements = elements;
		this.startPosition = startPosition;
		this.targetPosition = targetPosition;
		this.step = 150;
		this.leftMax = 4;
		this.topMax = 4;

	}

	getTarget(){
		return {top : this.targetPosition[0], left : this.targetPosition[1]};
	}

}

export default Level;