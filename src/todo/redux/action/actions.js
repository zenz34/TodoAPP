export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextTodoId = 0;

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});
