//

var soap = require('soap');
var url = "http://www.webservicex.net/uszip.asmx?wsdl";

exports.findZipCode = function(req, res) {
  var rs = 30004;
  res.send({zipcode: rs});
};

exports.findByZipCode = function(req, res) {
  soap.createClient(url, function (err, client) {
    //console.log('Client is ready');
    //console.log(client.describe());
    var zip = req.params.zipcode;

    client.USZip.USZipSoap.GetInfoByZIP( {USZip: zip}, function(err, response){
        if(err) console.log(err);
          //console.log(response);
          res.send(response);
      });
});
  
};


