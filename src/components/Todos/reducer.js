const reducer = (state, action)=>{
    switch (action.type) {
        case "ADD":
            let newTodo = {
                id:state.todo_id,
                ...action.payload
            }
            state.todo_id++;
            state.todos = [
                ...state.todos,
                newTodo
            ]
            return {...state};
        case "COMPLETE":
            let todos = state.todos.map((todo)=>{
                if (todo.id === action.payload.id){
                    todo.isChecked=true;
                }
                return todo
            })

            state.todos = todos

            return {...state};

        case "UNCOMPLETE":
            let todosCompleted = state.todos.map((todo)=>{
                if (todo.id === action.payload.id){
                    todo.isChecked=false;
                }
                return todo
            })

            state.todos = [...todosCompleted]

            return {...state};

        case "DELETE":
            let todosLeft = state.todos.filter((todo)=>todo.id !== action.payload.id)

            state.todos = [...todosLeft]

            return {...state};
    
        default:
            throw new Error();
    }
}

export default reducer;