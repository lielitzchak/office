const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const employeesModel = require("../models/employee");
const options = {
  secretKey: process.env.secretKey,
};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (objectFromPayload, done) => {
      employeesModel
        .findOne({ _id: objectFromPayload._id })
        .then((user) => (user ? done(null, user) : done(null, false)))
        .catch((error) => done(error, false));
    })
  );
};
