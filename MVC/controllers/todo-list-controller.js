function TodoListController(model){
	this.model = model;
}

TodoListController.prototype.onCheck(index){
	var todos = this.model.getTodos();
	var todo = todos[index];
	todo.done = !todo.done;
	this.model.setTodos(todos);
}

module.exports = TodoListController;