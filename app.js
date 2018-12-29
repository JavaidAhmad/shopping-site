const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRoutes)
app.use(adminRoutes)

//wildcard route
app.use((req,res,next)=>{
    res.status(404).sendfile(path.join(__dirname,'views','404.html'))
})


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`))