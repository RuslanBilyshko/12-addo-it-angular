

app.filter('rangeWithYear', function () {
    return function (items, min, max) {
        return _.filter(items, function (o) {
            return o.year >= min && o.year <= max;
        });
    }
});
