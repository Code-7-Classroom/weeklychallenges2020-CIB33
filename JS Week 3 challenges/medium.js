function exercise(x) {
    return function() {
        return "Today's exercise" + x
    };
};

var run = exercise('running');
console.log(run());

var swim = exercise('swimming');
console.log(swim());