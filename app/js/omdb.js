app.controller('omdbCtrl', function($scope, $rootScope, $http, $routeParams, $window) {

    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
        $rootScope.animation = currRoute.animation;
    });

    var APIroot = 'http://www.omdbapi.com/?';
    $scope.searchMovie = '';

    $scope.searchButton = (function(){
        $http.get(APIroot + 's=' + $scope.searchMovie)
        .success(function(result){
            $scope.datas = result.Search;
            console.log(result.Search);
            console.log('get movie data');
        });    
    })

});


app.controller('omdbdetailCtrl', function($scope, $rootScope, $http, $routeParams, $window) {

    var controller = this;
    var APIroot = 'http://www.omdbapi.com/?';

    $http.get(APIroot + 't=' + $routeParams.Title)
    .success (function(result){
        $scope.datas = result;
        console.log(result);
        console.log('get movie detail');
    })

});