var express = require('express');
var morgan = require('morgan');


var app = express();

//settings
app.set('port', Number(process.env.PORT || 8080));



//set static files folder
app.use(express.static('./public'));

/** MIDDLEWARE **/

app.use(morgan('dev'));




//listen to port
app.listen(process.env.PORT || 8080);
/*log.Fatal(http.ListenAndServe(":" + os.Getenv("PORT"), router));*/
