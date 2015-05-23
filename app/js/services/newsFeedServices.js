'use strict';

SocialNetwork.factory('newsFeedServices', function ($http, baseServiceUrl) {
    var newsFeedService = {};

    newsFeedService.params = {};

    var newsFeedServiceUrl = baseServiceUrl + "/posts";
/*
    newsFeedService.GetUserProfile = function (headers, success) {
        $http.get(newsFeedServiceUrl,
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, headers, config) {
                success(data);
            });
    };
*/
    newsFeedService.PublishPost = function (postData, headers, success, error) {
        $http.post(newsFeedServiceUrl, postData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    newsFeedService.EditPost = function (currentPost, headers, success, error) {
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