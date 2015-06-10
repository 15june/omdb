app = angular.module('omdb', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/index', {
            templateUrl: "./partials/home.html",
            animation: 'an-fade',
            controller: 'mainCtrl'
        })
        .when('/movie/detail/:Title', {
            templateUrl: "./partials/moviedetail.html",
            animation: 'an-fade',
            controller: 'movieDetailCtrl'
        })
        .otherwise({
            templateUrl: "./partials/home.html",
            animation: 'an-fade',
            controller: 'mainCtrl'
        });
});

app.controller('mainCtrl', function($scope, $rootScope, $http, $routeParams, $window) {
    
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
        $rootScope.animation = currRoute.animation;
    });

    var APIroot = 'http://www.omdbapi.com/?';
    $scope.searchMovie = '';
    $scope.searchResult = false;

    $scope.searchButton = (function(){
        $http.get(APIroot + 's=' + $scope.searchMovie)
        .success(function(result){
            $scope.searchResult = true;
            $scope.datas = result.Search;
            // console.log(result.Search);
            // console.log('get movie data');
        });    
    })

});

app.controller('movieDetailCtrl', function($scope, $rootScope, $http, $routeParams, $window) {
    
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
        $rootScope.animation = currRoute.animation;
    });

    var controller = this;
    var APIroot = 'http://www.omdbapi.com/?';

    $http.get(APIroot + 't=' + $routeParams.Title)
    .success (function(result){
        $scope.datas = result;
        // console.log(result);
        // console.log('get movie detail');
    })

});