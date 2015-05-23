'use strict';

SocialNetwork.controller('MainController', function ($scope, $location, mainData, authentication, notifyService) {


    $scope.username = authentication.GetUsername();

    if ($scope.username) {
        authentication.EditUserProfile(function (serverData) {
            $scope.userData = serverData;
            getNews();
    var getNewsFeed = function () {

        mainData.getAllNews(
            function (serverData) {
                for (var key in serverData.newsFeed) {
                    var news = serverData.newsFeed[key];
                    return news.id == newsFeed.newsId
                }

                $scope.data = serverData;
                window.scrollTo(0,0);
            },
            function () {
                notifyService.showError("Unsuccessful Connection to Database!")
            });
    };

    getNewsFeed();

		})
    }
    var path = $location.path();
    if ((path.indexOf("user") != -1) && !authentication.isLoggedIn()) {
        $location.path('/#');
    }


    


    $scope.pagination = function () {
        mainData.params.startPage = $scope.startPage;
        getNews();
    };
});
