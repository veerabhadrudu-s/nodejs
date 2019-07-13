//For more info on this - https://www.npmjs.com/package/mime-types
const mime_type_mapper = require('mime-types');
const file_responder = require('./file_responder_using_streams');
const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(`Requested with URL ${req.url} and method is ${req.method}`);
  const filePath = req.url.substring(1);
  console.log(`File to be read is ${filePath}`);
  console.log(`Mime type of file ${filePath} is ${mime_type_mapper.lookup(filePath)}`);
  if (mime_type_mapper.lookup(filePath))
    res.setHeader('Content-Type', mime_type_mapper.lookup(filePath));
  file_responder.serveFileUsingStream(filePath, res);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});