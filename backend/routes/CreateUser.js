const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const axios = require('axios')
const fetch = require('../middleware/fetchdetails');
const jwtSecret = "HaHa"

router.post("/creatuser", [
    body('email', 'Error! ,Enter a valid email').isEmail(),
    body('name', 'Error! , Name Must be minimum 8 Charecters in length').isLength({ min: 8 }),
    body('password', 'Error! , Password Must be minimum 8 Charecters in length').isLength({ min: 8 })
], async (req, res) => {
    let success = false

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
        await User.create({ 
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location

        }).then(user => {
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            success = true
            res.json({ success, authToken })
        })
            .catch(err => {
                console.log(err);
                res.json({ error: "Please enter a unique value." })
            })
    } catch (error) {
        console.error(error.message)
    }
})


// for sign in page

router.post("/loginuser", [
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {
    let success = false //
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
        // let userData = await User.findOne(email);  //{email:email} === {email}
        let userData = await User.findOne({ email: email });
        if (!userData) {
            return res.status(400).json({success,error: "Try Logging in with correct credentials" });
        }
        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare){
            return res.status(400).json({success,error: "Try Logging in with correct credentials" });
        }

        
        //mongo
        const data = {
            user: {
                id: userData.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({success:true,authToken:authToken});


    } catch (error) {
        console.error(error.message)
        res.json({success:false })
    }
})

router.post('/getlocation', async (req, res) => {
    try {
        let lat = req.body.latlong.lat
        let long = req.body.latlong.long
        console.log(lat, long)
        let location = await axios
            .get("https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=74c89b3be64946ac96d777d08b878d43")
            .then(async res => {
                // console.log(`statusCode: ${res.status}`)
                console.log(res.data.results)
                // let response = stringify(res)
                // response = await JSON.parse(response)
                let response = res.data.results[0].components;
                console.log(response)
                let { village, county, state_district, state, postcode } = response
                return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode)
            })
            .catch(error => {
                console.error(error)
            })
        res.send({ location })

    } catch (error) {
        console.error(error.message)
        res.send("Server Error")

    }
})






module.exports = router;

