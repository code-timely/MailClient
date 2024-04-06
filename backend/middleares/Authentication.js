const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config")

function signInAuthentication(req,res,next) {
    const literal = req.headers.authorization;
    console.log(literal);
    const token =( literal.split(" "))[1];
    try{
        const decodedValue = jwt.verify(token,JWT_SECRET);
        console.log(decodedValue);
        //if(decodedValue.mobile) 
            next();
        // else 
        //     res.status(403).json("Authentication failed");
    }
    catch(err) {
        console.log(err);
        res.status(403).json("Verification failed");
    }
}

module.exports={signInAuthentication};