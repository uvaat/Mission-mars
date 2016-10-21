import Ui from './Ui';
import Control from './Control';

class ActionsArea extends Ui{

	constructor(){
		
		super({

			

		});

		this.uicreate({ id : 'action-area' });
		this.appendToParent();
		this.actions = [];

	}

	reset(){

		if(this.actions.length){

			for(let i in this.actions){
				this.actions[i].delete();
				this.actions[i] = 'undefined';
			}
			
			this.actions = [];

		}

	}

	removeAction(action, index){

    	this.actions.splice(index, 1);
		action.delete();
		action = 'undefined';

	}

	addAction(control){

		let action = Object.assign(Object.create(control), control);
		console.log(action);
		action.uicreate({ class : 'action-' + action.name + ' move-' + action.direction });
		action.setParent(this.$elem);
		action.appendToParent();
		this.actions.push(action);

		var that = this;
		action.click(function(action){
			that.removeAction(action, action.$elem.index());
		});

	}

}

export default ActionsArea;