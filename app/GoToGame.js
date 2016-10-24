class GoToGame{

	constructor(startPosition, objectivePosition){
		this.startPosition = startPosition;
		this.objectivePosition = objectivePosition;
	}

	isWin(currentPosition){
		
		if(currentPosition.x == this.objectivePosition.x && currentPosition.y == this.objectivePosition.y) return true;
		return false;

	}

}

export default GoToGame;