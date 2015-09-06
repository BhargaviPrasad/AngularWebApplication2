angular.module('website',[]).
      config(function($routeProvider){
            $routeProvider.
                when('/about',{template:'Partials/basic-template.html', controller:AboutCtrl}).
                when('/experiments',{template:'Partials/basic-template.html', controller:ExperimentsCtrl}).
                when('/customers',{template:'Partials/Directives.html', controller:CustomerController}).
                otherwise({redirectTo:'/home',template:'Partials/basic-template.html', controller:HomeCtrl});
            });
     function MainCtrl($scope,$location){
           $scope.setRoute=function(route){
                 $location.path(route); 
                 }
                 }
    function AboutCtrl($scope){
        $scope.title= 'About Page';
        $scope.body= ' This is the about page body ';
    }
    function ExperimentsCtrl($scope){
        $scope.title= 'Experiments Page';
        $scope.body= ' This is the experiments page body ';
    }
    function HomeCtrl($scope){
        $scope.title= 'Home Page';
        $scope.body= ' This is the home page body ';
    }
    