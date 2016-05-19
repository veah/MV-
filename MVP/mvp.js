var TodosModel = require("models/todos");

var TodoInputPresenter = require("presenters/todo-input-presenter");
var TodoListPresenter = require("presenters/todos-list-presenter");

var TodoInputView = require("views/todo-input-view");
var TodoInputView = require("views/todos-list-view");

var todosModel = new TodosModel;

function initTodoApp(){
	initInput();
	InitList();
}

function initInput(){
	var todoInputView = new TodoInputView();
	var todoInputPresenter = new TodoInputPresenter(todoInputView,todosModel);
	$("#todo-input").html(todoInputView.$el);
}

function initList(){
	var todosListView = new TodosListView();
	var todosListPresenter = new TodosListPresenter(todosListView,todosModel)
	$("#todos-list").html(todosListView.$el);
}

initTodoApp();