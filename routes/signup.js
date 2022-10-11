var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/', passport.authenticate('signup', { session: false }), async (req, res, next) => {
  res.json({
    message: 'Signup successful',
    use: req.user
  });
});

module.exports = router;
