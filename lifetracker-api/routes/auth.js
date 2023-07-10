

/** Routes for authentication. */
const authenticateJWT = require("../utils/auth"); //importing the authenticateJWT middleware
const express = require("express") //req.body
const User = require("../models/user")
const router = express.Router()
const bodyParser = require('body-parser');

router.get('/user/:id', authenticateJWT, async (req, res) => {
  try {
      const id = parseInt(req.params.id); //getting the id from the request parameters
      const user = await User.fetchUserById(req.user.id); //fetching the user by id
      return res.status(200).json({ user }); //returning the user
  } catch (err) {
      return next(err);
  }
})

router.post("/decodedtoken", async (req, res, next) => {
  const token = req.body.token; // Getting the token from the request body
  const decodedToken = await User.verifyAuthToken(token); // Decoding the token
  console.log("decodedToken", decodedToken)


  return res.status(200).json({ decodedToken }); // Returning the decoded token
});


router.post("/register", async function (req, res, next) {
    try {
      const user = await User.register(req.body)
      
    } catch (err) {
      next(err)
    }
    return res.status(201).json()
  }
  )


// router.get("/me", security.requireAuthenticatedUser, async function (req, res, next) {
//   try {
//     const { email } = res.locals.user
//     const user = await User.fetchUserByEmail(email)
//     return res.status(200).json({ user })
//   } catch (err) {
//     next(err)
//   }
// })

router.post("/login", async function (req, res, next) {
  try {

    const user = await User.login(req.body)

    if (user) {
      const tokenPromise = User.generateAuthToken(user); //creating a token
      tokenPromise.then(token => {
          // console.log("this is my token", token); // Log the resolved token
          res.cookie("token", token); // Set the token in a cookie
          res.status(200).json({ user, token }); // Send the response to the client

      });
    }
  } catch (err) {

    next(err)
  }

})

router.post("/sleep", async (req, res, next) => {

  const { userId, sleepInfo } = req.body;
  console.log("req.user.id", userId, "req.body", sleepInfo)
  
  try {
      const sleep = await User.sleep(sleepInfo, userId); //calling the sleep method from the user model
      return res.status(200).json({ sleep }); //returning the sleep
      
  } catch (err) {
      return next(err);
  }
}) //creating a route for the sleep page")

router.post("/sleepdata", async (req, res, next) => {
    
  const id = req.body.userId; // Getting the id from the request body
  const sleepInfo = await User.fetchSleepById(id); // Fetching the sleep data by id
  return res.status(200).json({ sleepInfo }); // Returning the sleep data
});

module.exports = router
