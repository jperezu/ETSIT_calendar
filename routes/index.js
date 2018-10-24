const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');


function redirectBack(req, res, next) {
    const url =  "/";
    res.redirect(url);
}

router.get('/goback', redirectBack);


//-----------------------------------------------------------

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index.ejs');
});


router.post("/done", groupController.getinfo);

router.get('/download', function(req, res){
  var file = 'calendario_1819.csv';
  res.download(file); // Set disposition and send it.
});

module.exports = router;
