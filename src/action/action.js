export const increment = () => {
    return {
    type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addtodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const deletetodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

