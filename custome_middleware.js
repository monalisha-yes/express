const express = require('express')

const app = express();

const timeStamptLogger = (req,res,next)=> {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);

    next();
}

app.use(timeStamptLogger);

app.get('/', (req,res)=>{
    res.send("Welcome to middleware ");
});

app.get('/about', (req,res)=>{
    res.send("about page");
});

const port = 3000;
app.listen(3000,()=>{
    console.log("port is running");
}
);