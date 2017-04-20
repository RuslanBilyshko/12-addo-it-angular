
app.controller('CarsCtrl', function (CarsFactory) {
  this.lists = CarsFactory.getLists();
});
