/**
 * Created by jay on 3/2/2017.
 */


var app = angular.module('myapp', ['ng', 'ngResource']);

app.controller('ctrl', function($scope, $http) {

    var ctrl = this;
    $scope.title = "Flickr Photos";


    $http.jsonp('http://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json').success(function (data) {



    });

    jsonFlickrFeed = function(data){

        ctrl.result = data;

        ctrl.img_0 =  ctrl.result.items[0].media.m;
        ctrl.desc_0 = ctrl.result.items[0].description;

        ctrl.img_1 =  ctrl.result.items[1].media.m;
        ctrl.desc_1 = ctrl.result.items[1].description;

        ctrl.img_2 =  ctrl.result.items[2].media.m;
        ctrl.desc_2 = ctrl.result.items[2].description;

        ctrl.img_3 =  ctrl.result.items[3].media.m;
        ctrl.desc_3 = ctrl.result.items[3].description;

        ctrl.img_4 =  ctrl.result.items[4].media.m;
        ctrl.desc_4 = ctrl.result.items[4].description;

        ctrl.img_5 =  ctrl.result.items[5].media.m;
        ctrl.desc_5 = ctrl.result.items[5].description;

        ctrl.img_6 =  ctrl.result.items[6].media.m;
        ctrl.desc_6 = ctrl.result.items[6].description;

        ctrl.img_7 =  ctrl.result.items[7].media.m;
        ctrl.desc_7 = ctrl.result.items[7].description;

        ctrl.img_8 =  ctrl.result.items[8].media.m;
        ctrl.desc_8 = ctrl.result.items[8].description;



        console.log(ctrl.result);
    }
});