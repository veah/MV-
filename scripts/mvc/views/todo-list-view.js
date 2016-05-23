var Handlebars = require("handlebars");

function TodoListView(controller,model) {
	this.controller = controller;
	this.model = model;
	this.template = Handlebars.compile($("#todo-list-tpl").html());
	this.$el = $("<div></div>");//创建一个新的div
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
		self.controller.onCheck(+$li.attr("data-index"));//使之转换为Num类型
	})
}

TodoListView.prototype.listenModel = function(){
	this.model.on("change",this.render.bind(this));//执行的是bind传回的函数而不是bind，因为有括号（）；
}

module.exports = TodoListView;