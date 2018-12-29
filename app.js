const express = require('express');
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/shop',shop)
app.use('/admin',admin)




let PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Listening on port:${PORT}`))