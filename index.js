// map methods
function mapToNegativize(array) {
    return array.map(i => i * -1)
}

function mapToNoChange(array) {
    return array.map(i => i)
}

function mapToDouble(array) {
    return array.map(i => i * 2)
}

function mapToSquare(array) {
    return array.map(i => i * i)
}

// reduce methods
function reduceToTotal(array, index = 0) {
    return array.reduce((x, y) => x + y, index)
}

function reduceToAllTrue(array) {
    return array.reduce((value) => Boolean(value))
}

function reduceToAnyTrue(array) {
    return array.reduce((value) => Boolean(value), true)
}


