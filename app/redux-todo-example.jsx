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

var store = Redux.createStore(reducer, Redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to state change
var unsubcribe = store.subscribe(() => {
    var state = store.getState();

    document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    newSearchText: 'room'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    newSearchText: 'stupid'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    newSearchText: 'Ronado'
});


