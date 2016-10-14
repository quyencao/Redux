var redux = require('redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};

    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
}

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes of state to automatically update new state
// return an unsubscribe function
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);

    document.getElementById('app').innerHTML = state.name;
});

// Unsubscribe to function
// unsubscribe();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Quyen'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'John'
});
