const express = require('express');
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require('../Models/Users');
const auth = require('../Middleware/Auth');

/**
 * @method - GET
 * @param - /
 * @description - Get all users
 */

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    res.json({ message: err})
  }
});

/**
 * @method - GET
 * @param - /userByEmail
 * @description - Get a user by email
 */

router.get('/userByEmail', async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    res.json(user);
  } catch(err) {
    res.json({ message: err});
  }
});

/**
 * @method - GET
 * @param - /loggedInUser
 * @description - Get the logged in user
 */

router.get("/loggedInUser", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

/**
 * @method - POST
 * @param - /signup
 * @description - SignUp a new user
 */

router.post('/signup',
[
  check("username", "Please Enter a Valid Username").not().isEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please enter a valid password").isLength({ min: 6 })
],
async (req, res) => {
  const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        try {
          let user = await User.findOne({
              email: req.body.email
          });
          if (user) {
              return res.status(400).json({
                  msg: "User Already Exists"
              });
          }

          user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          });

          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(req.body.password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
          console.log(err.message);
          res.status(500).send("Error in Saving");
        }
});

/**
 * @method - POST
 * @param - /login
 * @description - Login a user
 */

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    try {
      let user = await User.findOne({
        email: req.body.email
      });
      if (!user)
        return res.status(400).json({
          message: "User doesn't Exist"
        });

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Password was incorrect"
        });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  }
);


module.exports = router;