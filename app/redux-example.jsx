var redux = require('redux');

console.log('Starting redux example ');

// Pure function
// 1. Same output with same input
// 2. Not update any variable outside
// 3. Not use to make any http request ...
function add(a, b) {
    return a + b;
}

// not pure
var a = 3;
function add(b) {
    return a + b;
}

// Not pure
var result;
function add(a,b) {
    result = a + b;
    return result;
}

// Not pure function
function add(a, b) {
    return a + b + new Date().getSeconds();
}

function changeProps(obj) {
    return {
        ...obj,
        name: 'Nam'
    }

    // obj.name = 'Nam';
    // return obj;
}

var startingValue = {
    name: 'Quyen',
    age: 25
};

var res = changeProps(startingValue);

console.log(startingValue);

//console.log(res);