const User = require("../models/users");

exports.userSignedinFailed = async (req, res) => {
  res.send({ msg: "Log in Failed", error: req.flash("error")[0] });
};

exports.singleUser = async (req, res) => {
  const { username } = req.params;
  const result = await User.findOne({ username });
  res.send(result);
};
exports.followers = async (req, res) => {
  const { username } = req.params;
  const result = await User.findOne({ username }).select({
    followers: 1,
    _id: 0,
  });
  const usersFollowers = await User.find({
    username: { $in: result?.followers },
  });
  res.send(usersFollowers);
};
exports.following = async (req, res) => {
  const { username } = req.params;
  const result = await User.findOne({ username }).select({
    following: 1,
    _id: 0,
  });
  const usersFollowing = await User.find({
    username: { $in: result?.following },
  });

  res.send(usersFollowing);
};
