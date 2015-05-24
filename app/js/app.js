'use strict';

var SocialNetwork = angular.module('SocialNetwork', ['ngRoute', 'angular-loading-bar']);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'templates/login-and-register.html',
            controller:'MainController'
        })
        
        .when('/#/', {
            templateUrl:'templates/news-feed.html',
            controller:'MainController'
        })
        .when('/me/profile', {
            templateUrl:'templates/edit-profile.html',
            controller:'MainController'
        })
		.when('/me/profile/password', {
            templateUrl:'templates/change-password.html',
            controller:'MainController'
        })
        .otherwise({redirectTo: '/'})

});
