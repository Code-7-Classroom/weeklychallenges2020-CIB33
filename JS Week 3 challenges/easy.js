function cutPizzaSlices(slices) {
    return function(peopleToShareWith) {
        return "Each person gets " + (slices/peopleToShareWith ) + "slices of pizza"
    }
}

var sharePizza = cutPizzaSlices(8)
console.log(sharePizza(2));

console.log(sharePizza(3));