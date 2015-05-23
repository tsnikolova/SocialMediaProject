'use strict';

SocialNetwork.controller('NewsFeedController', function ($scope, $location, $routeParams,
                                                     authentication, newsFeedServices, notifyService) {

    $scope.publishPost = function () {
        $scope.postData = imageHtml ? imageHtml.currentSrc : "";
        newsFeedServices.PublishPosts($scope.postData, authentication.GetHeaders(),
            function() {
                notifyService.showInfo("Successful Post Publish!");
                $location.path('/posts');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Ad Publish!", serverError)
            })
    };

    $scope.deletePost = function () {
        newsFeedServices.DeletePost($scope.currentPost.id, authentication.GetHeaders(),
            function () {
                notifyService.showInfo("Successful Ad Deletion!");
                $location.path('/user/ads');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Ad Deletion!", serverError)
            })
    };


    $scope.statusFilter = function (status) {
        newsFeedServices.params.status = status;
        newsFeedServices.params.startPage = 1;
        $scope.userStartPage = 1;
        getUserPosts();
    };

    var getUserPosts = function (postId) {

        if (!postId) {
            newsFeedServices.GetUserPosts(authentication.GetHeaders(),
                function (resp) {
                    $scope.userAds = resp;
                    window.scrollTo(0,0);
                });
        } else {
            newsFeedServices.GetUserPostsById(postId, authentication.GetHeaders(),
                function (resp) {
                    $scope.currentPost = resp;
                })
        }
    };

    getUserPosts($routeParams.id);
});
