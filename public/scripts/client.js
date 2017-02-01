var app = angular.module('bookApp', []);

app.controller('BookController', BookController);

function BookController($http){

  var ctrl = this;

  ctrl.message = '';

  $http({
    method: 'GET',
    url: '/books'
  }).then(updateMessage)
    .catch(handleError);

  function updateMessage(response){
    console.log('Got a response from the server', response);
    ctrl.message = response.data;
  }

  function handleError(err) {
    console.log('Error requesting data from server', err);
  }
}
