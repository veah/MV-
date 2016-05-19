function TodoInputPresenter(view,model){
	this.view = view;
	this.model = model;
	this.init();
}

TodoInputPresenter.prototype.init = function(){
	this.view.setPresenter(this);
	this.view.biuld();
}

TodoInputPresenter.prototype.onAddNewTodo = fucntion(){
	var content = this.view.getInput();
	if(content.length===0) return;

	var todos = this.model.gettodos();
	todos.unshift({content:content,done:false})
	this.model.setTodos(todos);

	this.view.setInput("");
}

module.exports = TodoInputPresenter;