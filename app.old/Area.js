import $ from 'jquery';

class Area {

	constructor(width, height){

		this.id = 'area';

		this.style = {
			width : width,
			height: width
		}

	}

	init(){

		var $area = $('<div></div>');
		$area.css(this.style);
		$area.attr('id', this.id);
		$('body').append($area);

		this.$area = $area;

	}

	drawMap(map){
		map.draw(this.$area);
	}

}

export default Area;