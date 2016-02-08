var myAppModule = angular.module('myApp', ['ui.router']);
myAppModule.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'views/login.html',
controller:'LoginController'
        }).state('home', {
    url: '/home',
    views: {
      '': {
        templateUrl: 'views/home.html'
      },
      'status@home': {
       templateUrl: 'views/status.html',
        controller: 'StatusController'
      },
      'history@home': {
        templateUrl: 'views/history.html',
        controller: 'StatusController'
      }
    }

  });
        
});
