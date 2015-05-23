'use strict';

SocialNetwork.factory('newsFeedServices', function ($http, baseServiceUrl) {
    var newsFeedService = {};

    newsFeedService.params = {};

    var newsFeedServiceUrl = baseServiceUrl + "/me";
/*

    newsFeedService.GetUserPosts = function (headers, success) {
        $http.get(newsFeedServiceUrl,
            {
                params: this.params,
                headers: headers
            })
            .success(function (data, status, headers, config) {
                success(data);
            });
    };
    newsFeedService.GetUserAdById = function (postId, headers, success) {
        $http.get(adServiceUrl + '/' + postId,
            {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            });
    };
*/

    newsFeedService.PublishPosts = function (postData, headers, success, error) {
        $http.post(newsFeedServiceUrl, postData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    newsFeedService.EditPost = function (currentPost, headers, success, error) {
        $http.put(newsFeedServiceUrl + '/' + currentPost.id, currentPost, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    newsFeedService.DeletePost = function (postId, headers, success, error) {
        $http.delete(newsFeedServiceUrl + '/' + postId, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };


    newsFeedService.clearParams = function () {
        newsFeedService.params.status = null;
        newsFeedService.params.startPage = 1;
    };

    newsFeedService.clearParams();
    newsFeedService.params.pageSize = 5;

    return newsFeedService;
});