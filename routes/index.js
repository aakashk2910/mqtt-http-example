var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Qr Code Generator' });
});


router.get('/api/:ext/:dm/:textString', function (req, res, next) {

    var fs = require('fs');

    var s = parseInt(req.params.dm.charAt(0), 10);

    var qr = require('qr-image');

    var qr_img
    if(req.params.ext == 'pdf' || req.params.ext == 'epl'){
        var qr_img = qr.image(req.params.textString, { type: req.params.ext });
        qr_img.pipe(require('fs').createWriteStream('public/images/qr.'+req.params.ext));
        var qr_string = qr.imageSync(req.params.textString, { type: req.params.ext });
        res.render('detail', {Extension : req.params.ext, Dimension : req.params.dm, TextString : req.params.textString});
    }
    else{
        var qr_img = qr.image(req.params.textString, { type: req.params.ext, size: s });
        qr_img.pipe(require('fs').createWriteStream('public/images/qr.'+req.params.ext));
        var qr_string = qr.imageSync(req.params.textString, { type: req.params.ext, size: s });
        res.render('detail', {Extension : req.params.ext, Dimension : req.params.dm, TextString : req.params.textString});

    }

});


router.get('/download/:ext', function (req, res, next) {
    res.download('public/images/qr.'+req.params.ext, 'qr.'+req.params.ext);
});



module.exports = router;
