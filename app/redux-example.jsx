var redux = require('redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};


    return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log("Current State ", currentState);