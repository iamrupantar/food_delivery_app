const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


router.post("/creatuser", [
    body('email', 'Error! ,Enter a valid email').isEmail(),
    body('name', 'Error! , Name Must be minimum 8 Charecters in length').isLength({ min: 8 }),
    body('password', 'Error! , Password Must be minimum 8 Charecters in length').isLength({ min: 8 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location

        })

        res.json({ Success: true });
    } catch (error) {
        console.log(error)
        res.json({ Success: false });
    }
})


module.exports = router;

