import Ui from './Ui';

class ControlArea extends Ui{

	constructor(){
		
		super({

			background : '#92BFB1',
			width : '100vw',
			height : '25vh',

		});

		this.$area = this.uicreate({ id : 'control-area' });
		this.appendToParent(this.$area);

	}	

}

export default ControlArea;