var Handlebars = require('handlebars');

function TodoInputView(controller,model){
	this.controller = controller;
	this.modle = modle;
	this.template = Handlebars.compile($("#todo-input-tpl").html());
	this.$el = $("<div></div>")
}

TodoInputView.prototype.build = function(){
	this.render();
	this.listen();
}

TodoInputView.prototype.render = function(){
	this.$el.html(this.template());
}

TodoInputView.prototype.listen = function(){
	var self = this;
	self.$el.find("button.new-todo-button")
		.on("click",function() {
			var $input = self.$el.find("input.input-todo");
			var content = $input.val();//获取input的值
			if(content.length === 0) return;
			$input.val("");//清空文本框
			self.controller.onAddNewTodo(content);
		})
}

module.exports = TodoInputView;