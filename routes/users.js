var express = require("express");
const passport = require("passport");
const { userSignedinFailed } = require("../apis/userGet");
const { userAdd, userSignup, userSignin } = require("../apis/userPost");
const { rawListeners } = require("../app/app");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", userSignup);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/loginFailed",
    failureFlash: true,
  }),

  userSignin
);

router.get("/loginFailed", userSignedinFailed);

module.exports = router;
