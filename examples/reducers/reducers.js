const { combineReducers } = require('redux');

const {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
} = require('../actions/actions');
const { SHOW_ALL } = VisibilityFilters;

function todos (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [ 
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return  state.map((todo, index) => {
                        if (index === action.index) {
                            return { ...todo, completed: !todo.completed };
                        }
                        return todo;
                    });
        default:
            return state;
    }
}

function visibilityFilter (state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

// function todoApp (state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action),
//     };
// }

module.exports.todoApp = combineReducers({
    visibilityFilter,
    todos
});
