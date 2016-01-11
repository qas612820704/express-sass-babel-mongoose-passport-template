var router = require('express').Router();

router.use('/forum', require('./forum'));

module.exports = router;
