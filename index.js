const express = require("express");
const app = express();

app.get('/', function(request, response){
    response.send('Hello John');
    });

app.listen(process.env.PORT, function(){
    console.log('my app is swimming');
});
