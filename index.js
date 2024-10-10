const express = require('express');
const app = express();

app.get('/', function (req, res) {
  // console.log('Response Headers:', res._headers);
  const url = req.query.url || '';
  res.redirect(404, url);
});

app.listen(3000, function () {
  console.log('Server running on http://localhost:3000');
});

module.exports = app;
