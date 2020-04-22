const express = require("express")
const morgan = require("morgan")
const server = express();


server.set("views", __dirname + "/views");

server.use(morgan("short"));

server.get("/", (req, res)=> {
    res.render("index.ejs")
})

server.get("/login", (req, res) =>{
    res.render("login.ejs")
})

server.get("/saludo", (req, res) => {
    res.render("saludo.ejs")
})

server.get("*", (req, res) => {
    res.end("Todavia el virgo del desarrollador no creo esta pestaña")
})

var port = 8888;
server.listen(port, ()=>{
    console.log("Servidor escuchando en el puerto:", port);
});
