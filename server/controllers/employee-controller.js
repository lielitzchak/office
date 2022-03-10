const employeesModel = require("../models/employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (request, response) => {
    if (employeesModel.exists(request.body.email) == true)
      return response.status(200).json({ massage: "email exist" });
    bcrypt.hash(request.body.email, 10, async (error, hash) => {
      if (error) return response.status(500).json({ massage: error });
      request.body.password = hash;
      await employeesModel
        .create(request.body)
        .then((result) =>
          response.status(200).json({ massage: "added", result })
        )
        .catch((err) => response.status(500).json({ err }));
    });
  },
  login: async (req, res) => {
    if (employeesModel.exists(req.body.email) == false)
      return res.status(400).json({ message: "Email not found" });
    try {
      const employeeUser = await employeesModel.findOne({
        email: req.body.email,
      });
      bcrypt.compare(
        req.body.password,
        employeeUser.password,
        (err, isMatch) => {
          if (err) return res.status(500).json({ message: "Error" });
          if (!isMatch)
            return res.status(400).json({ message: "Password incorrect" });
          const token = jwt.sign(
            { employee: employeeUser },
            process.env.SECRET_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({ message: "Login successful", token });
        }
      );
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
