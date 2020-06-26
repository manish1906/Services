var app = angular.module("Demo", []);
app.controller("SumController", ["$scope", "sumProvider", function ($scope, sumProvider)
    {
    $scope.value1 = 20;
    $scope.value2 = 20;
    $scope.doSum = function () {
        $scope.sum = sumProvider.getSumProvider($scope.value1, $scope.value2);
        console.log($scope.sum);
    }
        }
          
    ]);
app.controller("SumController1", ["$scope", "sumProvider", function ($scope, sumProvider) {
    $scope.value1 = 5;
    $scope.value2 = 15;
    $scope.doSum = function () {
        $scope.sum = sumProvider.getSumProvider($scope.value1, $scope.value2);
        console.log($scope.sum);
    }
}
]);

//app.service("sumService", ["$log", function ($log)
//     {
//    $log.log("SumService");
//    //console.log(this);
//    var traineeName = "Manish";
//    this.trainerName = "Puran";
//    //debugger;
//    this.getSumService = function (value1,value2)
//            {

//        var traineeName = "Parmar";
//        this.trainerName = "Bhatt";
//    return parseInt(value1) + parseInt(value2);
//    }
//  //  debugger;

//     }

//]);

//app.factory("sumFactory", ["$log", function ($log)
//     {
//    $log.log("SumFactory");
//    var oSum = {};
//    oSum.getSumFactory = function (value1, value2) {
//        return parseInt(value1) + parseInt(value2);
//    }
//    return oSum;
//     }
//    ]);
//app.provider("sumProvider", function () {
//    var value1,value2 = 0;
//    this.$get = function () {
//        var oSum = {};
//        oSum.getSumProvider = function () {
//            return parseInt(value1) + parseInt(value2);
//        }
//        return oSum;
//    }
//    this.setValue = function (a, b) {
//        value1 = a;
//        value2 = b;
//    }
//});
//app.config(["sumProviderProvider", function (sumProviderProvider) {
//    sumProviderProvider.setValue(30, 30);
//}
//]);
app.provider("sumProvider", function () {
    console.log("provider");
    this.$get = function () {
        var oSum = {};
        oSum.getSumProvider = function (value1,value2) {
            return parseInt(value1) + parseInt(value2);
        }
        return oSum;
    }
    
});