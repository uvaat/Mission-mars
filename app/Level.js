class Level{

	constructor(step, elements, controls, matrice, matriceSize){
		
		console.log(step);
		
		this._step = step;
		this._elements = elements;
		this._controls = controls;
		this._matrice = matrice;
		this._matriceSize = matriceSize;
		
	}

	get controls(){
		return this._controls;
	}

	get step(){
		return this._step;
	}

	get matrice(){
		return this._matrice;
	}

	get matriceSize(){
		return this._matriceSize;
	}

	get elements(){
		return this._elements;
	}

}

export default Level;