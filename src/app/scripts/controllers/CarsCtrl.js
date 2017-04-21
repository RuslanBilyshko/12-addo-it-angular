app.controller('CarsCtrl', function (CarsFactory) {

    /**
     * Классы для изменения типа списка
     * @type {{widthRow: number, widthImg: number, widthInfo: number}}
     */
    this.classes = {
        widthRow: 4,
        widthImg: 12,
        widthInfo: 12,
        rowActive: 'active',
        listActive: '',
        viewType: 'rows'
    };

    /**
     * Переключение на вид списка
     */
    this.setViewTypeList = function () {
        this.classes = {
            widthRow: 12,
            widthImg: 3,
            widthInfo: 9,
            rowActive: '',
            listActive: 'active',
            viewType: 'list'
        };
    };

    /**
     * Переключение на вид рядов
     */

    this.setViewTypeRow = function () {
        this.classes = {
            widthRow: 4,
            widthImg: 12,
            widthInfo: 12,
            rowActive: 'active',
            listActive: '',
            viewType: 'rows'
        };
    };

    /**
     * Данные для отображения
     */
    this.cars = CarsFactory.getCars();


    /**
     * Год выпуска для формы добавления
     * @type {{}}
     */
    this.years = {};

    for (var i = 1990; i < 2017; i++)
        this.years[i] = i;


    /**
     * Сброс формы добавления
     */
    this.resetCar = function () {

        /**
         * Обьек данных для добавления нового атвомобиля
         * @type {{name: string, price: number, mileage: number, year: number, img: string}}
         */
        this.newCar = {
            name: "VOLVO",
            price: 25000,
            mileage: 120,
            year: 2007,
            img: "auto1.jpg"

        }
    };

    this.resetCar();

    /**
     * Добавление автомобиля
     */
    this.addCar = function () {
        CarsFactory.addCar(this.newCar);
        this.sortedCars();
        this.resetCar();
    };

    this.removeCar = function (car) {
        CarsFactory.removeCar(car);
    };

    /**
     * FILTERS And Sorted
     */
    this.sortedByProperty = 'name';
    this.sortedProperties = {
        name: "Марка",
        price: "Цена",
        mileage: "Пробег",
        year: "Год выпуска"
    };


    this.sortedCars = function () {
        CarsFactory.sortedCars(this.sortedByProperty);
        this.cars = CarsFactory.getCars();
    };

    /**
     * Pagination
     * -----------------------------------------
     * Сдесь, мне кажеться, нужно добавить логики
     * в фабрику так как я понимаю,
     * получать постранично надо будет с бекенда
     * Если можно коменты на эту тему :)
     */

    this.currentPage = 0;
    this.carsPerPage = 3;

    this.firstPage = function () {
        return this.currentPage == 0;
    };

    this.lastPage = function () {
        var lastPageNum = Math.ceil(this.cars.length / this.carsPerPage - 1);
        return this.currentPage == lastPageNum;
    };

    this.numberOfPages = function () {
        return Math.ceil(this.cars.length / this.carsPerPage);
    };

    this.startingItem = function () {
        return this.currentPage * this.carsPerPage;
    };

    this.pageBack = function () {
        this.currentPage = this.currentPage - 1;
    };

    this.pageForward = function () {
        this.currentPage = this.currentPage + 1;
    };


});
