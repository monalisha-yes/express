const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send("welcome to our page");

});


app.get('/products',(req,res)=>{
    const products = [
        {
            id : 1,
            label : 'product 1'
        },
         {
            id : 2,
            label : 'product 2'
        },
         {
            id : 3,
            label : 'product 3'
        }
    ]
    res.json(products);
});
app.get('/products/:Id',(req,res)=>{
    const productId = parseInt(req.params.Id);
    const products = [
        {
            id : 1,
            label : 'product 1'
        },
         {
            id : 2,
            label : 'product 2'
        },
         {
            id : 3,
            label : 'product 3'
        }
    ];
const getSingleProduct = products.find(product => product.id === productId);
if(getSingleProduct){
    res.json(getSingleProduct);
}
else{
    res.status(404).send('prodcut not found')
}


});
const port = 3000;
app.listen(port,()=> {
    console.log(`server is now running at port ${port}`);
})