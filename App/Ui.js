import $ from 'jquery';

class Ui {

	constructor(styles = {}, $parent = false){

		if(!$parent) this.setParent($('#area'));
		else this.setParent($parent);

		this.styles = styles;

	}

	static getWindowHeight(){
		return $(window).height();
	}

	setParent($parent){
		this.$parentArea = $parent;
	}

	click(callBack){

		this.$elem.click(function(e){

			e.preventDefault();
			callBack(this);

		}.bind(this));

	}

	addClass(css){
		this.$elem.addClass(css);
	}

	uicreate(params){

		this.$elem = $('<div></div>');
		for(let i in params){
			this.$elem.attr(i, params[i]);
		}
		this.$elem.css(this.styles);

	}

	appendToParent(){
		this.$parentArea.append(this.$elem);
	}

	static documentReady(callBack){

		$('body').css({
			margin : 0,
			padding : 0,
			overflow : 'hidden'
		});

		$(document).ready(callBack)

	}

}

export default Ui;