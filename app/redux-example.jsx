var redux = require('redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};
    console.log('New action', action);

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

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log("Current State ", currentState);

var action = {
    type: 'CHANGE_NAME',
    name: 'Quyen'
};

store.dispatch(action);

console.log("Name should be Quyen ", store.getState());