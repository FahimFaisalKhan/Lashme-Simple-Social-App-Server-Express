var express = require("express");
const passport = require("passport");
const { unfollow } = require("../apis/userDelete");
const {
  userSignedinFailed,
  singleUser,
  followers,
  following,
} = require("../apis/userGet");
const { userAdd, userSignup, userSignin, follow } = require("../apis/userPost");
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

router.post("/:username/follow", follow);

router.get("/loginFailed", userSignedinFailed);
router.get("/:username", singleUser);
router.get("/:username/followers", followers);
router.get("/:username/following", following);
router.delete("/:username/follow", unfollow);
module.exports = router;
