const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post("/api/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User With same email alread exists!" });
        }
        const hashPassword =await bcryptjs.hash(password, 8);
        let user = new User({
            name,
            email,
            password: hashPassword,
        });
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }

});

module.exports = authRouter;