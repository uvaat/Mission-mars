import Ui from './Ui';

class Control extends Ui{

	constructor(name, icon){
		
		super({});
		this.name = name;
		this.uicreate({ class : 'controls-' + name });

	}

	delete(){
		this.$elem.remove();
	}


}

export default Control;