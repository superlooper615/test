import express from 'express';
import authController from '../controllers/userauth.controller.js';
// import pass from '../authentication/passport'
import passport from 'passport';
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Diversitechnologies Users' });
  });

router.get('/signup', authController.signup);
router.get('/signin', authController.signin);
router.get('/dashboard', isLoggedIn, authController.dashboard);
router.post('/signin', passport.authenticate('local-signin'), (req, res, next) => {
  res.status(200).send({
    email: req.user.email,
    firstname: req.user.firstname,
    role: req.user.role,
  })
}

);

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/user/dashboard',
  failureRedirect: '/user/signup'}), (req, res, next) => {
  console.log(req.user);
});

router.get('/signout',authController.signout);

router.get('/isLoggedIn', (req, res, next) => {
  return res.status(200).send(req.isAuthenticated())
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/user/signin');
}

module.exports = router;