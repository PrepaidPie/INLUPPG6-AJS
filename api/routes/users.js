const route = require("express").Router();
const authorization = require("../auth/auth.js");

const users = require("../controllers/userController.js");

route.post("/register", users.register);
route.post("/login", users.login);

route.get("/", authorization, users.getUsers);
route.get("/:id", authorization, users.getUser);
route.put("/:id", authorization, users.updateUser);
route.delete("/:id", authorization, users.deleteUser);

module.exports = route;