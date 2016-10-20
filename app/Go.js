import Ui from './Ui';

class Go extends Ui{

	constructor(){
		
		super({

			background : 'blue',
			width : '100px',
			height : '100px',
			position: 'fixed',
			top : '0px',
			right : '0px'

		});

		this.uicreate({ id : 'btn-go' });
		this.appendToParent();

	}



}

export default Go;