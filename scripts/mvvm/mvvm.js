var viewModel = require("vue");

var app = new viewModel({
	el:"#app",
	data:{
		newTodoContent:"",
		todos:[{content:"make ppt!",done:false}]
	},
	methods:{
		addNewTodo:function(){
			if(!this.newTodoContent.length) return;
			this.todos.push({
				content:this.newTodoContent,
				done:false
			})
			this.newTodoContent = "";
		},
		checkTodo:function(i){
			var todo = this.todos[i];
			todo.done = !todo.done
		}
	}
})