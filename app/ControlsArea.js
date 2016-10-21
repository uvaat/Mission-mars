import Ui from './Ui';

class ControlsArea extends Ui{

	constructor(){
		
		super({});

		this.$area = this.uicreate({ id : 'control-area' });
		this.appendToParent(this.$area);

	}	

}

export default ControlsArea;