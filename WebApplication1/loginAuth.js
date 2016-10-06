var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:54952/token',
  headers: 
   { 'postman-token': '0ed4aeee-c1fd-fc5c-f1af-6765f1b7496f',
     'cache-control': 'no-cache',
     accept: 'application/json',
     'content-type': 'application/x-www-form-urlencoded' },
  form: { grant_type: 'password', username: 'test', password: 'test' } };

request(options, function (error, response, body) {
  console.log(body);
});
