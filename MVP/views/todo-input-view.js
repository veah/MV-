var Handlebars = require("handlebars");

function TodoInputView(){
	this.presenter=null;
	this.template = handlebars.compile($("#todo-input-tpl").html());
	this.$el = $("<div></div>");
}

TodoInputView.prototype.bulid = function(){
	this.render();
	this.listen();
}

TodoInputView.prototype.setPresenter = function(presenter){
	this.presenter = presenter;
}

TodoInputView.prototype.render = function(){
	this.$el = $(this.template());
}

TodoInputView.prototype.listen = function(){
	var self = this;
	this.$el.find("button.new-todo-btn").on("click",function(){
		self.presenter.onAddNewTodo();
	})
}

TodoInputView.prototype.getInput = function(){
	return this.$el.find("input").val();
}

TodoInputView.prototype.setInput = function(text){
	return this.$el.find("input").val(text);
}

module.exports = TodoInputView;