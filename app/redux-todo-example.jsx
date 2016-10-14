var Redux = require('redux');

var defaultState = {
    searchText: '',
    completed: false,
    todos: []
}

var reducer = (state = defaultState, action) => {

    switch(action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.newSearchText
            };
        default:
            return state;
    }
};

var store = Redux.createStore(reducer);

console.log("Current State ", store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    newSearchText: 'room'
});

console.log('Search Text should be "room"', store.getState());


