import Ui from './Ui';

class ActionsArea extends Ui{

	constructor(){
		
		super({

			background : '#AFD0BF',
			width : '100vw',
			height : '25vh',

		});

		this.$area = this.uicreate({ id : 'action-area' });
		this.appendToParent(this.$area);

	}	

}

export default ActionsArea;