import Control from './Control';

class Move extends Control{

	constructor(direction){
		super('move');
		this.direction = direction;
		this.addClass('move-' + direction);
	}
	
}

export default Move;