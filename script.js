function ToDoController(){
    this.todoList=[];
    this.id=1;
    this.ENTER_KEY=13;
    this.todoInput=document.getElementById('newTodo');
    this.todoListView=document.getElementById('todoListView');
};

function Todo(id,content,isDone){
    this.id=id;
    this.content=content;
    this.isDone=isDone;
};

TodoController.prototype={
    getTodoFromLocalStorage:function(key){
        var todoList=JSON.parse(localStorage.getItem(key)) || [];
    return todoList;
    },
    setTodoLocalStorage:function(key){
        localStorage.setItem('todoList', JSON.stringify(key));
    },
    handleTodoItem:function(value){
        this.isDone=false;
        var mainArray=todoController.getTodoFromLocalStorage('todoList');
        this.id=todoController.idLargestOfLocal(mainArray)+1;
        var todoItem=new Todo(this.id, value, this.isDone);
        return todoItem;
    }, 

    idLargestOfLocal:function(mainArray){
        var lenghArr =mainArray.length;
        if(lenghArr !==0){
            return mainArray[lenghArr-1].id;            
        }
        else {
            return 0;
        }
        return lastId;
    },

    addNewTodo: function(todo,list){
        list.push(todo);
    todoController.setTodoLocalStorage(list);
    return todo;
   },

}