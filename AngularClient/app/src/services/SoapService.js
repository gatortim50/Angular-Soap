(function () {
  "use strict";

  /**
   * @ngdoc overview
   * @name captchaSrvc
   * @description
   * # captchaSrvc
   *
   * service that gets the data - the captcha
   */

  var SoapService = function ($http, MY_CONSTANTS) {

    return {

      getZip: function (zip_code) {

        var url = MY_CONSTANTS.RACK + '/zip/' + zip_code;
        console.log(url);

        return $http.get(url)
          .then(function(response){
            console.log('server response: ' + JSON.stringify(response.data));
            return response.data;
          });

      },

      getZipNode: function (zip_code) {

        var url = MY_CONSTANTS.NODE + '/zip/' + zip_code;
        console.log(url);

        return $http.get(url)
          .then(function(response){
            console.log('server response: ' + JSON.stringify(response.data));
            return response.data;
          });

      }

    };

  };

  SoapService.$inject = ['$http', 'MY_CONSTANTS'];

  angular.module('clientApp').factory('SoapService', SoapService);


}());
