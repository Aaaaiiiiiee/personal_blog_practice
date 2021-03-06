/* Personal Libraries */
var template = require('../lib/template.js');
/* npm module */
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    if(!req.session.is_logined) res.redirect('/login');
    else{
        var html = template.index('', 'this is timeline');
        res.send(html);
    }
});

module.exports = router;