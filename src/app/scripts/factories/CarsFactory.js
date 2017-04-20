app.factory('CarsFactory', function () {
    var service = {};

    var lists = [
        {
            id: 1,
            img: 'auto1.jpg',
            name: 'JAGUAR XK R PORTFOLIO',
            price: 6000,
            year: 2004,
            mileage: 120
        },
        {
            id: 2,
            img: 'auto1.jpg',
            name: 'TOYOTA Prado 150 Classik',
            price: 8500,
            year: 2011,
            mileage: 90
        },
        {
            id: 3,
            img: 'auto1.jpg',
            name: 'LAND ROVER Range Rover AUTOBIOGRAPHY',
            price: 12000,
            year: 2015,
            mileage: 195
        },
        {
            id: 4,
            img: 'auto1.jpg',
            name: 'BMW 7-series 730d',
            price: 16300,
            year: 2016,
            mileage: 210
        }
    ];

    service.getLists = function () {
        return lists;
    };

    return service;
});