var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');

var router = express.Router();

router.post('/', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An error occurred.');

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const payload = { _id: user._id, email: user.email };
        const token = jwt.sign(JSON.stringify(payload), 'TOP_SECRET');

        return res
                 .cookie('jwt',
                   token, {
                     httpOnly: true,
                     secure: false
                   }
                 )
                 .status(200)
                 .json({ message: 'You have loggin in!' });
      }
      );
    } catch (error) {
      return next(error);
    }
      }
    )(req, res, next);
  }
);

module.exports = router;
