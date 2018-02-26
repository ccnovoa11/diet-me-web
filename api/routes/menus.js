const express = require('express');
const router = express.Router();

// get all
router.get('/', function (req, res, next) {
   res.status(200).json({
       message:'Handling GET request to /products'
   });
    
});

// post
router.post('/', function (req, res, next) {
    res.status(200).json({
        message:'Handling POST request to /products'
    });
});

// get by id
router.get('/:menuId', function (req,res,next) {

    const id = req.params.menuId;
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

//update por id

router.patch('/:menuId', function (req, res, next) {
    res.status(200).json({
        message: 'update product'
    });
    
});

//delete

router.delete('/:menuId', function (req, res, next) {
    res.status(200).json({
        message: 'delete product'
    });

});




module.exports = router;