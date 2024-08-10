const router = require('express').Router();
const { registerUser, getAll, getUser } = require('../controllers/user.controllers');
const { validateRegistration } = require("../middlewares/user.validator")
router.post("/register", validateRegistration, registerUser);
router.get("/all", getAll);
router.get("/:username", getUser);

module.exports = router;