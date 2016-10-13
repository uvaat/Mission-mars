import $ from 'jquery';

class Square {

	constructor(height, element, cssClass = 'square'){

		this.height = height;
		this.element = element;
		this.cssClass = cssClass;

		this.style = {
			width : 150,
			height: 150,
			background: this.element.color,
			float: 'left',
		}

	}

	draw($container){

		var $square = $('<div></div>');
		$square.css(this.style);
		$square.addClass(this.cssClass);
		$container.append($square);

	}

}

export default Square;