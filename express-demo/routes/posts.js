const express = require('express');
const router = express.Router();

router.get('/:year/:month', (req, res) => {
    res.send(Object.assign(req.params, req.query));
});

module.exports = router;