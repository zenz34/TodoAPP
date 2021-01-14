import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
    allIds: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, {
                        id,
                        content,
                        completed,
                    },
                ]
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            const allIds = state.allIds.filter((curElement) => {
                if (curElement.id === id) {
                    return {
                        ...curElement, 
                        completed: !curElement.completed
                    }
                }

                return curElement
            })
            
            return {...state, allIds: allIds};
        }
        default:
            return state;
    }
}
