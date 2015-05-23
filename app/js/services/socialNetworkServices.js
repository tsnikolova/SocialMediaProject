'use strict';

SocialNetwork.factory('adServices', function ($http, baseServiceUrl) {
    var socialNetworkService = {};

    socialNetworkService.params = {};

    var socialNetworkServiceUrl = baseServiceUrl + "/users/:username";

    socialNetworkService.GetUserProfile = function (headers, success) {
        $http.get(socialNetworkServiceUrl,
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, headers, config) {
                success(data);
            });
    };

    socialNetworkService.PublishPost = function (adData, headers, success, error) {
        $http.post(socialNetworkServiceUrl, adData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    socialNetworkService.EditPost = function (currentPost, headers, success, error) {
        $http.put(socialNetworkServiceUrl + '/' + currentPost.id, currentPost, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    socialNetworkService.DeletePost = function (postId, headers, success, error) {
        $http.delete(socialNetworkServiceUrl + '/' + postId, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };


    socialNetworkService.clearParams = function () {
        socialNetworkService.params.status = null;
        socialNetworkService.params.startPage = 1;
    };

    socialNetworkService.clearParams();
    socialNetworkService.params.pageSize = 5;

    return socialNetworkService;
});