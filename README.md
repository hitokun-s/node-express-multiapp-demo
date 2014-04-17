node-express-multiapp-demo
==========================

### About
This is sample project to achieve "multi app" in node.js with Express.   

### Structure

    |  
    +-- app.js (<-- main. sometimes named "server.js")  
    |  
    +-- root  
          |
          +-- hoge1  
          |     +-- img  
          |     |    +-- sample.jpg  
          |     +-- index.js  
          +-- hoge2  
          |     +--- img  
          |     |     +-- sample.jpg  
          |     +--- index.js  
          +-- manager.js  

"hoge1" and "hoge2" represent independent app(context).  
In each "index.js", you can code in the same way in "app.js", like this:  

    app.get([path to this context], function(req,res){  
        //do something  
    })  

### Magic Spells

- in app.js 

        require("./root/manager.js").init(app, express);  
    
- in "index.js" of each context(ex. "hoge1","hoge2")  

        var app = require("../manager.js").getApp(__dirname);  
    
