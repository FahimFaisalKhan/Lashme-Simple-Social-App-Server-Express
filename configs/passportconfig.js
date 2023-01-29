const User = require("../models/users");
var LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const verifyPassword = async (hashedPass, password) => {
  console.log(hashedPass);
  const result = await bcrypt.compare(password, hashedPass);
  console.log("ff", result);
  return result;
};
initPassport = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      // function of username, password, done(callback)
      async (email, password, done) => {
        console.log(email, password);
        // look for the user data

        // if there is an error

        // if user doesn't exist

        try {
          const user = await User.findOne({ email: email });
          console.log("user", user);
          if (!user) {
            return done(null, false, { message: "User not found." });
          }
          // if the password isn't correct
          const isMatch = await verifyPassword(user.password, password);

          if (!isMatch) {
            return done(null, false, {
              message: "Invalid password.",
            });
          } else {
            return done(null, user);
          }
        } catch (err) {
          if (err) {
            return done(err);
          }
        }

        // if the user is properly authenticated
      }
    )
  );
  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture,
      });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
};

module.exports = initPassport;
