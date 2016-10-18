import $ from 'jquery';

class Ui {

	constructor(styles = {}, $parent = false){

		if(!$parent) this.$parentArea = $('#area');
		else this.$parentArea = $parent;

		this.styles = styles;

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