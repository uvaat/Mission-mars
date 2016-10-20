import Control from './Control';

class Move extends Control{

	constructor(direction, color){
		super('move', color);
		this.direction = direction;
	}
	
}

export default Move;