'use strict';

var SocialNetwork = angular.module('SocialNetwork', ['ngRoute', 'angular-loading-bar']);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-soccial-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
                templateUrl:'startPage.html',
            controller:'MainController'
        })
        .when('/home', {
            templateUrl:'login-home-view.html',
            controller:'MainController'
        })
        .when('#/profile', {
            templateUrl:'edit-profile.html',
            controller:'MainController'
        })
        .when('#/profile/password', {
            templateUrl:'change-password.html',
            controller:'MainController'
        })
        .otherwise({redirectTo: '/'})

});
