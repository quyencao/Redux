var Redux = require('redux');

var defaultState = {
    searchText: '',
    completed: false,
    todos: []
}

var reducer = (state = defaultState, action) => {


    return state;
};

var store = Redux.createStore(reducer);

console.log("Current State ", store.getState());
