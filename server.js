const express = require('express');
const app = express();

var port = 3000;




app. use(express.static('public'));


app.get('/', function(request, responce){
  response.sendFile('index.html');

});

app.get('/myURI', function(request, response){
  response.send('Responding to a GET request!');

});

app.post('/myURI',function(request, response){
  response.send('Responding to a POST request!');

});

app.listen(port);
