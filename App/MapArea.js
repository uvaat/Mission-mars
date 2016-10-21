import Ui from './Ui';

class MapArea extends Ui{

	constructor(){
		
		super();

		this.uicreate({ id : 'map-area' });
		this.appendToParent(this.$area);

	}	

}

export default MapArea;