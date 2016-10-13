import $ from 'jquery';

class Map {

	constructor(squares, cssClass = 'bord'){

		this.squares = squares;
		this.cssClass = cssClass;

	}

	draw($area){

		var $container = $('<div></div>');
		$container.addClass(this.cssClass);

		for(var i in this.squares){
			this.squares[i].draw($container);
		}

		$area.html($container);

	}

}

export default Map;