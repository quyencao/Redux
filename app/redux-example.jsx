var redux = require('redux');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};

    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby : action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        ...action.movie
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.id)
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

    console.log('State is', store.getState());
});

// Unsubscribe to function
// unsubscribe();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Quyen'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'Pokemon',
        genre: 'Comedy'
    }
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'John'
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'Star Wars',
        genre: 'Action'
    }
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});