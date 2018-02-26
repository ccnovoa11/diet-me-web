const express = require('express');
const router = express.Router();

// get all
router.get('/', function (req, res, next) {
    res.status(200).json({
        message:'Handling GET request to /orders'
    });

});

// post
router.post('/', function (req, res, next) {
    res.status(200).json({
        message:'Handling POST request to /orders'
    });
});

// get by id
router.get('/:ordersId', function (req,res,next) {

    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:'Ypu passed an special ID',
            id: id
        });
    } else{
        res.status(200).json({
            message:'You passed an ID'
        });
    }
});


//delete
router.delete('/:productId', function (req, res, next) {
    res.status(200).json({
        message: 'delete product'
    });

});




module.exports = router;