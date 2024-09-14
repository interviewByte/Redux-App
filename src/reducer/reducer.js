const INITIAL_VAL = {
    count:  0
}
const myreducer = (state = INITIAL_VAL, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { ...state, count:state.count+1}
            break;
        case 'DECREMENT':
            return { ...state, count: state.count-1}
            break;
        default:
            return state
    }
}
export default myreducer;
