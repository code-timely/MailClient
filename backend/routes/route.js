const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Email } = require("../database/db");
const { UserSignUpValidator, EmailDataValidator } = require("../middleares/InputValidation");
const { signInAuthentication } = require("../middleares/Authentication");
const router = express.Router();
const JWT_SECRET = require("../config")

router.post('/signup',UserSignUpValidator,async (req,res)=>{
    console.log("signup end point got hit");
    const p=req.body;
    try{
        console.log("Inside the try block");
        await User.create({
            name : p.name,
            mobile : p.mobile,
            email : p.email,
            password : p.password
        });
        console.log("Request body is",p);
        const token = jwt.sign(p.mobile,JWT_SECRET)
        const literal ="Bearer ".concat(token)
        res.json({
            message : "User created successfully",
            token : literal
        });
    }
    catch(err) {
        console.log("Inside the catch block");
        console.log(err);
        res.status(504).json({message : "User creation failed"});
    }
})

router.post('/signin',async(req,res)=>{
    console.log(JWT_SECRET);
    const p = req.body;
    try{
        const user = await User.findOne({
            email : p.email,
            password : p.password
        })
        console.log(user);
         if(user.name){
            const token = jwt.sign(user.mobile,JWT_SECRET)
            const literal ="Bearer ".concat(token)
            //req.headers.authorization = literal;
            res.json({token : literal});
            //res.json("User signed in successfully");
        }
        else res.status(403).json({message: "Some error occured in signing up"});
    }
    catch(err) {
        console.log(err);
        res.status(403).json({message: "Please enter valid credentials!"});
    }
})

router.post('/compose',signInAuthentication,EmailDataValidator,async(req,res)=>{
    const p = req.body;
    try {
        const mail = await Email.create({
            from:p.from,
            to:p.to,
            subject:p.subject,
            data:p.data
        })
        await User.updateOne({
            email : p.to
        },{
            "$push" : {
                receivedEmail : mail._id
            }
        })
        res.json({message: "Email sent successfully!"})
    }
    catch(err) {
        console.log("Some error occured in sending email");
    }
})

router.get('/inbox',signInAuthentication,async (req,res)=>{
    console.log("inbox end point got hit");
    //const filter = req.query.filter || "";
    const literal = req.headers.authorization;
    const token = literal.split(" ")[1]
    const userMobile = jwt.decode(token)
    try{
        const user = await User.findOne({
            mobile: userMobile
        });
        const inboxMails = await Email.find({
            _id: {
                "$in": user.receivedEmail
            } 
        });
        res.json({
            receivedEmail: inboxMails
    });
    }
    catch(err) {
        console.log(err);
        res.status(504).json({message: "Error occured in fetching the emails"});
    }
})

router.get("/getUserEmailID",signInAuthentication,async (req,res)=>{
    console.log("get user id got hit")
    const literal = req.headers.authorization;
    const token = literal.split(" ")[1];
    const userMobile = jwt.decode(token);
    try{
        console.log("finding..");
        const user = await User.findOne({
            mobile: userMobile
        });
        console.log(user);
        res.json({
            email : user.email
        });
    }
    catch(err) {
        console.log(err);
        res.status(504).json({message: "Error occured in fetching the emails"});
    }
})

router.post("/getEmail",signInAuthentication,async(req,res)=>{
    console.log("get user id got hit")
    const emailID = req.body.emailID;
    try{
        console.log("finding..");
        const email = await Email.findById(emailID)
        console.log(email);
        res.json({response:email});
    }
    catch(err) {
        console.log(err);
        res.status(504).json({message: "Error occured in fetching the email"});
    }
})


module.exports = router;