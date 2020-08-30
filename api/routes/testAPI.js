var express = require('express');
var router = express.Router();

// var http = require('http').createServer(express);

router.get('/', function(req, res, next) {
  res.send("API is working properly");
});

// http.listen(3002, () => {
//   console.log('listening on *:3002');
// });

module.exports = router;