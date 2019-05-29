var express_framework = require("express");
var app = express_framework();
var ip = "0.0.0.0";
var port = 3000;


app.get("/", (request, response) => {
    debugger;
    response.end("Hello World using express Framework !");
});

app.listen(port, ip, () => {
    console.log(`Example app listening on port ${port}!`);
});