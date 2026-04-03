function operater(a, b, callback) {
    return callback(a, b)
}

function multiply(a, b) {
    return a * b;
}

console.log("Multiply", operater(5, 5, multiply));