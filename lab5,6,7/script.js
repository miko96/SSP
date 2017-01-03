var app = angular.module('myApp', []);

app.controller('contentController', function ($scope, $http) {
    $http.get('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=7c002b4668294599b9efb8b221cd60ef')
        .then(function (response) {
            $scope.NewsData = response.data.articles;
            console.log(response.data.articles)
        });
    $scope.AddNews = function (author, title, description, imgurl, link){
        console.log('asdasd');
        $scope.NewsData.push({
            author: author,
            title: title,
            description: description,
            url: link,
            urlToImage: imgurl,
            publishedAt: "2017-01-03T14:00:00Z"
        });
    };
});




app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

