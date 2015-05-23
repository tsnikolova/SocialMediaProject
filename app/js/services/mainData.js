'use strict';

SocialNetwork.factory('mainData', function ($http, baseServiceUrl) {
    var data = {};

    data.params = {};

    data.getAllNews = function (success, error) {
        $http.get(baseServiceUrl + '/me/feed', {params: this.params})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    data.clearParams = function () {
        data.params.startPage = 1;
    };

    data.clearParams();
    data.params.pageSize = 5;

    return data;
});
