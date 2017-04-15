'use strict'

app.filter('world', function () {
  return function (data) {
    return data + ' world'
  }
});
