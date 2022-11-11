var express = require('express');
var bodyParser = require('body-parser');

var port = 3030;
var BASE_API_PATH ="/api/v2";

var contacts = [
    {"name":"peter","phone":123456},
    {"name":"john","phone":66610}
];


console.log("Starting API server ...");

var app = express();
app.use(bodyParser.json());

app.get("/",(req,res) =>{

    res.send("<html><body><h1>My server</h1></body></html>");
});

app.get(BASE_API_PATH + "/contacts",(req,res) =>{

    console.log(Date() + " - GET /contacts");
    res.send(contacts);
});

app.post(BASE_API_PATH +"/contacts", (req, res) =>{
    console.log(Date() + " - POST /contacts");
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201);

});

app.listen(port);

console.log("Server ready!");