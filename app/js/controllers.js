'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];

/*//FinanceMeter
angular.module('myApp.controllers', []).
controller('FinanceController', function ($scope) {
    $scope.salary = 0;
    $scope.percentage = 0;
    $scope.result = function () {
        return $scope.salary * $scope.percentage * 0.01;
    };
});

//RandomeHelloMessage
angular.module('myApp2', []).controller('GreetingController',
    function ($scope) {
        $scope.now = new Date();
        $scope.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
        $scope.greeting = $scope.helloMessages[0];
        $scope.getRandomHelloMessage = function () {
            $scope.greeting = $scope.helloMessages[parseInt((Math.random() * $scope.helloMessages.length))];
        }
    });


//Adding instance to RandomeHelloMessage
angular.module('myApp3', [])
    .controller('GreetingController',
        function ($scope) {
            this.now = new Date();
            this.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
            this.greeting = this.helloMessages[0];
            this.getRandomHelloMessage = function () {
                this.greeting = this.helloMessages[parseInt((Math.random() * this.helloMessages.length))];
            }
        });*/

//Scope inheritance
angular.module('myApp.controllers', []).controller('SiteController', function ($scope) {
    $scope.publisher = 'SitePoint';
    $scope.type = "Web Development";
    $scope.name = "Scope for SiteController";
});

angular.module('myApp.controllers').controller('BookController', function ($scope) {
        $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
        $scope.name = "Scope for BookController";
    }

);
