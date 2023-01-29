exports.userSignedinFailed = async (req, res) => {
  res.send({ msg: "Log in Failed", error: req.flash("error")[0] });
};
