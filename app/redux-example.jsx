var redux = require('redux');
var axios = require('axios');


var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


// Subscribe to changes of state to automatically update new state
// return an unsubscribe function

var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('State is', store.getState());

    if(state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading....';
    } else if (state.map.url){
        document.getElementById('app').innerHTML = `<a href=${state.map.url} target="_blank">View Your Location</a>`;
    }
});

// Unsubscribe to function
// unsubscribe();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Quyen'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Pokemon', 'Comedy'));

store.dispatch(actions.changeName('John'));

store.dispatch(actions.addMovie('Star Wars', 'Action'));

store.dispatch(actions.removeMovie(1));

