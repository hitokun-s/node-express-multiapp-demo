var app;
module.exports = {
    getApp: function (callerDirname) {
        var contextRoot = callerDirname.substr(__dirname.length + 1);
        return {
            get: function (path, callback) {
                app.get("/" + contextRoot + path, callback);
            },
            post: function (path, callback) {
                app.post("/" + contextRoot + path, callback);
            }
        }
    },
    init : function(_app, express){
        app = _app
        var fs = require('fs');
        fs.readdir(__dirname, function(err, files){
            if (err) throw err;
            files.filter(function(file){
                return fs.statSync(__dirname + "/" + file).isDirectory();
            }).forEach(function (context) {

                //load context
                require("./" + context);

                //set context root dir as static
                app.use("/" + context + "/", express.static(__dirname + "/" + context));
            });
        });
    }
}