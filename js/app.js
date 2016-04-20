//jslint esnext: true
//jshint esnext: true

var mainApp = angular.module('HeroSearchApp', []);
var mainRequestUrl = 'http://gateway.marvel.com:80/v1/public/characters?events=29&orderBy=name&apikey=7ac2434b13b9586847ea8973d001c6a6&limit=10';
//var mainRequestUrl = 'http://gateway.marvel.com:80/v1/public/characters?orderBy=name&apikey=7ac2434b13b9586847ea8973d001c6a6&limit=50';

mainApp.controller('MainAppControl', function($scope, $http){
  $scope.heroes = [];
  $scope.herosearch = '';

  $http({
    method: 'get',
    url: mainRequestUrl,
  }).then(function (response){
    console.log(response.data.data.results);
    $scope.heroes = response.data.data.results;
  });

  $scope.extradetails = function(id){
    $scope.events=[];
      console.log(id);
    var secondRequestUrl = 'https://gateway.marvel.com:443/v1/public/characters/'+id+'/events?apikey=7ac2434b13b9586847ea8973d001c6a6';

    $http({
      method: 'get',
      url: secondRequestUrl,
    }).then(function (response){
      $scope.hero = response.data.data.results;
      console.log(response.data.data.results);

    });
  };
});
