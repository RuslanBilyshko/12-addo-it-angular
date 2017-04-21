app.factory('CarsFactory', function () {
    var service = {};

    /**
     * Сдесь будет заглушка для получения
     * списка авто с сервера
     * @type {[*]}
     */
    var carList = [
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

    /**
     * Получение списка авто
     * @returns {*[]}
     */
    service.getCars = function () {
        return carList;
    };

    /**
     * Добавление авто
     * @param newCar
     */
    service.addCar = function (newCar) {
        /**
         * Сдесь, я так понимаю будет запрос на сервер
         * для добавления нового атомобиля
         */
        carList.push({
            id: _.uniqueId('car_'),
            name: newCar.name,
            img: newCar.img,
            price: newCar.price,
            year: newCar.year,
            mileage: newCar.mileage
        });
    };

    service.removeCar = function (car) {
        carList = _.pull(carList, car);
    };

    carList = _.sortBy(carList, 'name');

    service.sortedCars = function (property) {
        carList = _.sortBy(carList, property);
    };


    return service;
});