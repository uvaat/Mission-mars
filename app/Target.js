import $ from 'jquery';

class Target {

	constructor(level, cssClass = 'target'){

		this.cssClass = cssClass;
		this.level = level;
		this.style = {
			background : 'green',
			position : 'absolute',
			width : level.step,
			height : level.step,
		};

		this.position = this.level.getTarget();
		this.initDraw();

	}

	initDraw(){

		this.$target = $('<div></div>');
		this.$target.addClass(this.cssClass);
			
		this.style.top = this.position.top * this.level.step;
		this.style.left = this.position.left * this.level.step

		this.$target.css(this.style);


	}

}

export default Target;