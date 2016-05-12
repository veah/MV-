var TodoModel = require("mvc/models/todos");

var TodoInputController = require("mvc/controllers/todo-input-controller");
var TodoInputView = require("mvc/views/todo-input-view");

var TodoListController = require("mvc/controllers/todo-list-controller");
var TodoListView = require("mvc/views/todo-list-view");

var todosModel = new TodosModel;

function initTodoApp(){
	initInput();
	InitList();
}

function initInput(){
	var todoInputController = new TodoInputController(todosModel);
	var todoInputView = new TodoInputView(todoInputController,todosModel);

	todoInputView.build();
	$("#todo-input").html(todoInputView.$el);
}

function initList(){
	var todoListController = new TodoIListController(todosModel);
	var todoListView = new TodoListView(TodoListController,todosModel);

	todoListView.build();
	$("#todo-list").html(todoListView.$el);
}

initTodoApp();
