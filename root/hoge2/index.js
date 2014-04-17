//magic spell
var app = require("../manager.js").getApp(__dirname);

app.get("/:page([a-z0-9]+)", function(req,res){
    res.send(req.params.page);
})

app.post("/:page([a-z0-9]+)", function(req,res){
    res.send(req.params.page);
})


