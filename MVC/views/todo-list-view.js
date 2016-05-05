var Handlebars = require("handlebars");

function TodoListView(controller,model) {
	this.controller = controller;
	this.model = model;
	this.template = Handlebars.compile($("#todo-list-tpl").html());
	this.$el = $("<div></div>");
}

TodoListView.prototype.build = function(){
	this.render();
	this.listenCheck();
	this.listenModel();
}

TodoListView.prototype.render = function(){
	var todos = this.model.getTodos();
	this.$el.html(this.template({todos:todos}));
}

TodoListView.prototype.listenCheck = function(){
	var self = this;
	self.$el.on("click","li",null,function(event){
		var $li = $(event.currentTarget);
		self.controller.onCheck(+$li.attr("data-index"));
	})
}

TodoListView.prototype.listenModel = function(){
	this.model.on("change",this.render.bind(this));
}

module.exports = TodoListView;