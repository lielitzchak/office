const employees = require("../models/employee");
const bcrypt = require("cryptjs");

module.exports = {
  register: async (request, response) => {
    if (employees.exists(request.body.email) == true)
      return response.status(200).json({ massage: "email exist" });
    bcrypt.hash(request.body.password, 10, async (error, hash) => {
      if (error) throw response.status(500).json({ massage: "error" });
      request.body.password = hash;
      await employees
        .create(request.body)
        .then((result) =>
          response.status(200).json({ massage: "added", result })
        )
        .catch((err) => response.status(500).json({ err }));
    });
  },
  login: async (request, response) => {},
};
