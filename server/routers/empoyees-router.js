const employeeRoute = require("express").Router();
const employeeController = require("../controllers/employee-controller");
employeeRoute.get("/employee", employeeController.getAllEmployees);
employeeRoute.post("/register", employeeController.register);
employeeRoute.post("/login", employeeController.login);
module.exports = employeeRoute;
