'use strict';

SocialNetwork.controller('MainController', function ($scope, $location, mainData, authentication, notifyService) {

    $scope.startPage = 1;
    $scope.username = authentication.GetUsername();

    if ($scope.username) {
        authentication.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }
    var path = $location.path();
    if ((path.indexOf("user") != -1) && !authentication.isLoggedIn()) {
        $location.path('/');
    }


    var getNews = function () {

        mainData.getAllNews(
            function (serverData) {
                for (var key in serverData.newsFeed) {
                    var ad = serverData.newsFeed[key];

                    news.newsFeed = currentNew[0] ? currentNew[0].news : null;
                }

                $scope.data = serverData;
                window.scrollTo(0,0);
            },
            function () {
                notifyService.showError("Unsuccessful Connection to Database!")
            });
    };

    getNews();


    $scope.pagination = function () {
        mainData.params.startPage = $scope.startPage;
        getNews();
    };
});
