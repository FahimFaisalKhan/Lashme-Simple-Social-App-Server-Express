const bcrypt = require("bcrypt");
const User = require("../models/users");
exports.userSignup = async (req, res) => {
  const { username, password, email, fullname } = req.body;
  try {
    const docs = await User.find({ username, email });

    if (!docs.length) {
      const hashPass = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        password: hashPass,
        email,
        fullname,
      });

      res.send({ msg: "Succ created" });
    } else {
      res.send({ msg: "already exists" });
    }
  } catch (err) {
    if ((err.name = "ValidationError")) {
      res.send({ msg: "validation failed" });
    } else {
      res.send({ msg: "something went wrong" });
    }
  }
};
exports.userSignin = async (req, res) => {
  console.log(req);
  req.flash("info");
  if (req.user) {
    res.send({ msg: "logged in success ok" });
  } else {
    res.send({ msg: "logged in fail" });
  }
};
