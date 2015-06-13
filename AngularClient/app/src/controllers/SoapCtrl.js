(function () {
  "use strict";


  var SoapCtrl = function ($scope, SoapService) {

    var onComplete = function(data){

      $scope.data = data.get_info_by_zip_response.get_info_by_zip_result.new_data_set.table;
      if (data == null || data == undefined || $scope.data.city == undefined) {
        return;
      }
      $scope.city = $scope.data.city;
      $scope.state = $scope.data.state;
      $scope.area_code = $scope.data.area_code;
      $scope.time_zone = $scope.data.time_zone;

    };

    var onError = function(reason){
      $scope.error = reason;
    };

    // submit the data
    $scope.doSubmit = function (zipcode) {
      console.log("****--- doSubmit: "  + zipcode);

      SoapService.getZip(zipcode)
        .then(onComplete, onError);

    };

  };

  SoapCtrl.$inject = ['$scope', 'SoapService'];

  angular.module('clientApp').controller('SoapCtrl', SoapCtrl);

}());
