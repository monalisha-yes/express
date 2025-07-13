const express = require('express')

const app = express();

const myMiddleware = (req,res,next)=>{
    console.log("this is first middleware");
    next();
}

app.use(myMiddleware);

app.get('/',(req,res)=>{
    res.send("home page");
});

app.get('/about',(req,res)=>{
    res.send("about me");
});

const port = 3000;
app.listen(3000,()=>{
    console.log('listen port 3000');
});