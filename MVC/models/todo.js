var EventEmitter = require("eventemitter2").EventEmitter2;

function TodosModel(){
	EventEmitter.call(this);
	this._todos = [{content:"make PPT",done:false}];
}

var pro = TodosModel.protpotype = Object.create(EventEmitter.prototype);

pro.getTodos = function() {
	return this._todos;
}

pro.setTodos = function(todos) {
	this._todos = todos;
	this.emit("change",todos);
}

module.exports = TodosModel;