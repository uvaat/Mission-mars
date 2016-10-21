import Ui from "./Ui";

class Square extends Ui {

	constructor(element, step, $parent){
	
		super({

			background : element.color,
			width : step,
			height : step,
			float : 'left'

		},$parent);

		this.uicreate({class : 'square' + ' element-' + element.name});
		
	}

}

export default Square;