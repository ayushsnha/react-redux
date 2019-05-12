const express = require('express');
const app = express();
const path = require('path'); 
const PORT = process.env.PORT||5000;


const dev = app.get('env')!=='production'

if(!dev){
    app.disable('x-powered-by')
    app.use(express.static(path.resolve(__dirname,'build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

app.get("/",(req,res)=>{
    res.send('hello');
})
app.get("/api/customer",(req,res)=>{
    const customer=[
        {id:1,firstname:'guy1',lastname:'abc'},
        {id:2,firstname:'guy2',lastname:'abc'},
        {id:3,firstname:'guy3',lastname:'abc'}
    ];
    res.json(customer)
})

app.listen(PORT,(err)=>{
    if(err)throw err
    console.log('server started');
})