// You'll need a single TembooSession object in your code, eg:
// var tsession = require("temboo/core/temboosession");
// var session = new tsession.TembooSession("accountName", "myFirstApp", "abc123xxxxxxxxxxxxxx");

var Google = require("temboo/Library/Google/Geocoding");

var geocodeByAddressChoreo = new Google.GeocodeByAddress(session);

// Instantiate and populate the input set for the choreo
var geocodeByAddressInputs = geocodeByAddressChoreo.newInputSet();

// Set inputs
geocodeByAddressInputs.set_Address("yourValueHere");

// Run the choreo, specifying success and error callback handlers
geocodeByAddressChoreo.execute(
    geocodeByAddressInputs,
    function(results){console.log(results.get_Latitude());},
    function(error){console.log(error.type); console.log(error.message);}
);