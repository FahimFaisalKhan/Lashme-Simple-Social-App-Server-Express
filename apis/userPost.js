const bcrypt = require("bcrypt");
const User = require("../models/users");

exports.userSignup = async (req, res) => {
  const { username, password, email, fullname } = req.body;
  try {
    const docs = await User.find({ $or: [{ email }, { username }] });
    const existingUsername = docs[0]?.username === username && username;
    const existingEmail = docs[0]?.email === email && email;
    console.log(existingUsername, existingEmail);
    if (!docs.length) {
      const hashPass = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        password: hashPass,
        email,
        fullname,
      });

      res.send({ msg: "User created successfully" });
    } else {
      res.send({
        msg:
          existingUsername && existingEmail
            ? `${existingEmail} and ${existingUsername} already exists`
            : existingEmail
            ? `${existingEmail} already exists`
            : existingUsername
            ? `${existingUsername} already exists`
            : "Something went wrong",
      });
    }
  } catch (err) {
    if ((err.name = "ValidationError")) {
      console.log(err);
      res.send({ msg: "validation failed" });
    } else {
      res.send({ msg: "something went wrong" });
    }
  }
};
exports.userSignin = async (req, res) => {
  if (req.user) {
    res.send({ msg: "logged in success ok" });
  } else {
    res.send({ msg: "logged in fail" });
  }
};

exports.follow = async (req, res) => {
  const userToFollow = req.params.username;

  const userWhoWantsToFollow = req.user.username;
  const userExists = await User.exists({ username: userToFollow });
  if (!userExists) {
    res.send({ msg: "User you trying to follow does not exist" });
  } else {
    const alreadyFollowing = await User.find({
      username: userWhoWantsToFollow,
      following: userToFollow,
    });

    console.log(alreadyFollowing);
    let following;
    if (!alreadyFollowing.length) {
      following = await User.findOneAndUpdate(
        { username: userWhoWantsToFollow },
        { $push: { following: userToFollow } },
        { new: true }
      );
    }

    const alreadyFollowed = await User.find({
      username: userToFollow,
      followers: userWhoWantsToFollow,
    });
    let follower;
    if (!alreadyFollowed.length) {
      follower = await User.findOneAndUpdate(
        { username: userToFollow },
        { $push: { followers: userWhoWantsToFollow } },
        { new: true }
      );
    }

    if (alreadyFollowed.length || alreadyFollowing.length) {
      res.send({ msg: "You are already following the user" });
    } else {
      res.send({ msg: "Successfully follwed" });
    }
  }

  //   console.log(follower, following);
};
