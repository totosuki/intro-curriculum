'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write("<!DOCTYPE html>\n<html lang='ja'>\n  <body>\n    <h1>HTMLの一番大きい見出しを表示します</h1>\n  </body>\n</html>");
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
