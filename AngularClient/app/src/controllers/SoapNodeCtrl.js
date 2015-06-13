(function () {
  "use strict";


  var SoapNodeCtrl = function ($scope, SoapService) {

    var onComplete = function(data){

      $scope.data = data.GetInfoByZIPResult.NewDataSet.Table;
      //console.log('data: ' + JSON.stringify($scope.data));

      if ($scope.data == null || $scope.data == undefined || $scope.data.CITY == undefined) {
        return;
      }
      $scope.city = $scope.data.CITY;
      $scope.state = $scope.data.STATE;
      $scope.area_code = $scope.data.AREA_CODE;
      $scope.time_zone = $scope.data.TIME_ZONE;

    };

    var onError = function(reason){
      $scope.error = reason;
    };

    // submit the data
    $scope.doSubmit = function (zipcode) {
      console.log("**** doSubmit: "  + zipcode);

      SoapService.getZipNode(zipcode)
        .then(onComplete, onError);

    };

  };

  SoapNodeCtrl.$inject = ['$scope', 'SoapService'];

  angular.module('clientApp').controller('SoapNodeCtrl', SoapNodeCtrl);

}());
