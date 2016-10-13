class Bord {

	constructor(squares){

		console.log(squares);
		this.squares = squares;

	}

	drawBord(){

		for(var i in this.squares){
			console.log(this.squares[i]);
		}

	}

}

export default Bord;