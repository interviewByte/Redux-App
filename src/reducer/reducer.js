const INITIAL_VAL = {
    count:  0,
    todos: []
}
const myreducer = (state = INITIAL_VAL, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { ...state, count:state.count+1}
            break;
        case 'DECREMENT':
            return { ...state, count: state.count-1}
            break;
        case 'ADD_TODO':
            return {
               ...state,
               todos: [...state.todos, {id: Date.now(), text:action.payload}]
            } 
            break;
        case 'DELETE_TODO':
            return { 
                ...state,
                todos: state.todos.filter(todo=>todo.id!==action.payload)
            }
            break;    
        default:
            return state
    }
}
export default myreducer;
