class Level {

	constructor(bord, elements, startPosition, level){
		this.level = level;
		this.bord = bord;
		this.elements = elements;
		this.startPosition = startPosition;
		this.stepSize = 150;
		this.leftMax = 4;
		this.topMax = 4;
	}

}

export default Level;