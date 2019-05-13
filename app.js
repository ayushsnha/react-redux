const express = require('express');
const app = express();
const path = require('path'); 
const PORT = process.env.PORT||5000;


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get("/api/customer",(req,res)=>{
    const customer=[
        {id:1,firstname:'guy1',lastname:'abc'},
        {id:2,firstname:'guy2',lastname:'abc'},
        {id:3,firstname:'guy3',lastname:'abc'}
    ];
    res.json(customer)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT,(err)=>{
    if(err)throw err
    console.log('server started');
})