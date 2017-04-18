'use strict'

app.directive('bar', function () {
  return {
    link: function (scope, element, attrs) {
      element.on('click', function () {
        console.log(scope.list);
      })
    }
  }
});
