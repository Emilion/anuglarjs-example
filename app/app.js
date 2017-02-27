var exampleApp = angular.module('exampleApp', ['ui.router']);

exampleApp.config(function ($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/dashboard');

    /**
     * Dashboard view route configurations
     */
   $stateProvider.state('dashboard', {
       url: '/dashboard',
       templateUrl: './app/dashboard-template.html',
       controller: 'dashboard.controller',
       resolve: {
           directors: function($http) {
               return $http.get('../data/directors.json');
           }
       }
   });

    /**
     * Directors view route configurations
     */
    $stateProvider.state('directors', {
           url: '/directors',
           template: '<div class="row">' +
           '<h2 class="col-md-offset-3 col-md-6 text-center">Directors</h2>' +
            '<directors directors="directors"></directors>' +
           '</div>',
           controller: 'directors.controller',
           resolve: {
               directors: function($http) {
                   return $http.get('../data/directors.json');
               }
           }
       })
});