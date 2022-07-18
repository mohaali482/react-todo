const reducer = (state, action)=>{
    switch (action.type) {
        case "ADD":
            const newTodo = {
                ...action.payload
            }
            return [...state, newTodo];
        case "COMPLETE":
            const todos = state.map((todo)=>{
                if (todo.name !== action.name){
                    return todo
                }
            })

            return todos;
    
        default:
            throw new Error();
    }
}

export default reducer;