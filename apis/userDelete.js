const User = require("../models/users");

exports.unfollow = async (req, res) => {
  const userToUnFollow = req.params.username;

  const userWhoWantsToUnFollow = req.user.username;
  const userExists = await User.exists({ username: userToUnFollow });
  if (!userExists) {
    res.send({ msg: "User you trying to unfollow does not exist" });
  } else {
    const alreadyFollowing = await User.find({
      username: userWhoWantsToUnFollow,
      following: userToUnFollow,
    });

    let unfollowing;
    if (alreadyFollowing.length) {
      unfollowing = await User.findOneAndUpdate(
        { username: userWhoWantsToUnFollow },
        { $pull: { following: userToUnFollow } },
        { new: true }
      );
    }

    const alreadyFollowed = await User.find({
      username: userToUnFollow,
      followers: userWhoWantsToUnFollow,
    });
    let unfollower;

    if (alreadyFollowed.length) {
      unfollower = await User.findOneAndUpdate(
        { username: userToUnFollow },
        { $pull: { followers: userWhoWantsToUnFollow } },
        { new: true }
      );
    }

    if (!alreadyFollowed.length || !alreadyFollowing.length) {
      res.send({ msg: "You are not following the user" });
    } else {
      res.send({ msg: "Successfully unfollwed" });
    }
  }

  //   console.log(follower, following);
};
