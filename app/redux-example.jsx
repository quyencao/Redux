var redux = require('redux');

// Name reducer and action generators
// ----------------------------------
var nameReducer = (state = 'Anonymous', action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
}

// Hobby reducer and action generators
// ----------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter(hobby => hobby.id !== action.id);
        default:
            return state;
    }
};

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    };
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    };
};

// Movie reducer and action generators
// ----------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    ...action.movie
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.id !== action.id);
        default:
            return state;
    }
};

var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        movie: {
            title,
            genre
        }
    };
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    };
};

// Combine Reducers
// ----------------------
var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});


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

store.dispatch(changeName('Quyen'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie('Pokemon', 'Comedy'));

store.dispatch(changeName('John'));

store.dispatch(addMovie('Star Wars', 'Action'));

store.dispatch(removeMovie(1));