

/** Routes for authentication. */

const express = require("express") //req.body
const User = require("../models/user")
const router = express.Router()

router.post("/register", async function (req, res, next) {
    try {
      const user = await User.register(req.body)
      
     
    } catch (err) {
      next(err)
    }
    return res.status(201).json()
  })

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
    const user = await User.authenticate(req.body)
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})



module.exports = router
