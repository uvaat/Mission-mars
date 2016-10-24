import Ui from './Ui';
import Square from './Square';

class Ground extends Ui{

	constructor(level){
		
		super({
			width : level.step * level.matriceSize
		});
		
		this.level = level;
		super.uicreate({ id : 'ground' });
		this.generate();

	}

	checkGround(x, y){

		let key = this.getSquareKey(x, y);
		if(this.squares[key]) return true;
		else return false;

	}

	setObjective(position){
		var key = this.getSquareKey(position.x, position.y);
		console.log(key);

		for(var i in this.squares){

			if(i == key) this.squares[i].$elem.css('background', 'blue');

		}

	}

	getSquareKey(x, y){
		return  x + '_' + y;
	}

	generate(){

		this.squares = {};

		var y = 0;
		var x = -1;

		for(var i in this.level.matrice){

			let m = this.level.matrice[i];
			let element = this.level.elements[m[1]];
			let square = new Square(element, this.level.step, this.$elem);

			if(x < this.level.matriceSize -1){
				x ++;
			}else{
				x = 0;
				y++;
			}

			let key = this.getSquareKey(x, y);
			this.squares[key] = square;

			square.appendToParent();

		}

	}

}

export default Ground;