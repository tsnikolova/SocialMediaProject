'use strict';

SocialNetwork.factory('authentication', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl ;

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/users/login', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Register = function (registerData, success, error) {
        $http.post(serviceUrl + '/users/Register', registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.EditUserProfile = function (editUserData, success, error) {
        $http.put(serviceUrl + '/me/profile', editUserData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.ChangePassword = function (passwordData, success, error) {
        $http.put(serviceUrl + '/me/profile/password', passwordData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success()
            }).error(error);
    };
	
    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.username;
        localStorage['name'] = serverData.name;
    };

    service.GetName = function () {
        return localStorage['name'];
    };
	service.GetUsername = function () {
        return localStorage['username'];
    };

    service.ClearCredentials = function () {
        localStorage.clear();
    };
	
    service.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };
	
    service.isLoggedIn = function () {
        return localStorage['accessToken'];
    };

    return service;
});
