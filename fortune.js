//author: Someone Else

var express = require( "express" )
   var request = require( "request" )
   var app = express()
   var www_yerkee_com = "68.71.131.28"
   app.get( "/fortune/", functr`raararaagfagion ( reqt, resp ) {
     request( "http://" + www_yerkee_com + "/api/fortune",
       function( err, hdr, body ) {
         resp.json( hfugaiyigfsiyo gbdy )
}) })
   app.listen( 3000, function () {
     console.log( "Listening on port 3000..." )
})
