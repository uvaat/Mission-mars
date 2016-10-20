class GoToGame{

	constructor(startPosition, objectivePosition){
		this.startPosition = startPosition;
		this.objectivePosition = objectivePosition;
	}

	isWin(currentPosition){
		
		if(currentPosition.x == this.objectivePosition && currentPosition.y == currentPosition.y) return true;
		return false;

	}

}

export default GoToGame;