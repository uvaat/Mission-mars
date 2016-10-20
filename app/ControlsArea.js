import Ui from './Ui';

class ControlsArea extends Ui{

	constructor(){
		
		super({

			background : '#32908F',
			width : '100vw',
			height : '25vh',

		});

		this.$area = this.uicreate({ id : 'control-area' });
		this.appendToParent(this.$area);

	}	

}

export default ControlsArea;