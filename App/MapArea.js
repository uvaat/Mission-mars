import Ui from './Ui';

class MapArea extends Ui{

	constructor(){
		
		super({

			background : '#F2545B',
			width : '100vw',
			height : '50vh',

		});

		this.uicreate({ id : 'map-area' });
		this.appendToParent(this.$area);

	}	

}

export default MapArea;