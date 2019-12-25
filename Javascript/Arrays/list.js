console.log("CONNECTED!");

var todos = [];
/*
window.setTimeout(function(){
    while(input !== "quit"){
        //handle input  
        if(input === "list"){
            console.log(todos);
        
        } else if(input === "new"){
            //ask for new todo
            var newTodo=prompt("Enter new Todo");
        
            // add todos to array
            todos.push(newTodo);
        
        }
        var input = prompt("What would you like to do?");
        
        }
        console.log("OK,YOU QUIT THE APP");
},500);
*/

window.setTimeout(function(){
    while(input !== "quit"){
        //handle input  
        if(input === "list"){
           listTodos();
        
        } else if(input === "new"){
          
            addTodo();
        
        } else if(input === "delete"){
           
            deleteTodo();            

        }
        var input = prompt("What would you like to do?");
        
        }
        console.log("OK,YOU QUIT THE APP");
},500);

function listTodos(){
    todos.forEach(function(todo, i){
        console.log(i+" : " +todo);
    });

}

function addTodo(){
    //ask for new todo
    var newTodo=prompt("Enter new Todo");
        
    // add todos to array
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo(){
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index,1);
    console.log("Deleted Todo");
}