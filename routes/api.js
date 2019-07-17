
var passport = require('passport');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

//Register
router.post('/signup', passport.authenticate('signup',{session:false}), async function(req, res, next ) {
   
      res.json({
          message: 'Signup successful',
          user: req.user
      })

  });
//Login
  router.post('/login', async function(req, res, next) {
      passport.authenticate('login', async (err,user,info) => { try{
          if(err || !user){
              const error = new Error('error occurred')
              return next(error);
          }
        req.login(user,{session : false}, async (error)=> {
            if(error) return next(error)
            const body={_id : user._id, username : user.username};
            const token = jwt.sign({ user: body}, 'top_secret');
            return res.json({token});
        });
      }catch (error){
          return next(error);
      } 
    })(req,res,next);
});
module.exports = router;
   