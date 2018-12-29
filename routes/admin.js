const path = require('path');
const express = require('express');
const router = express.Router();


router.use('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))    
})

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})
module.exports = router;