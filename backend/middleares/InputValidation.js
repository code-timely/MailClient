const z = require("zod");

const UserSchema = z.object({
    name : z.string(),
    mobile : z.string().length(10),
    email : z.string().email(),
    password : z.string().min(8)
})

const EmailSchema = z.object({
    from : z.string().email(),
    to : z.string().email(),
    subject : z.string(),
    data : z.string()
});

function UserSignUpValidator(req,res,next) {
    console.log("UserSignUpValidator got hit");
    const Payload = req.body;
    const parsedPayload = UserSchema.safeParse(Payload);
    if(parsedPayload.success)
        next();
    else 
        res.status(411).json("Enter Valid Credentials");
}

function EmailDataValidator(req,res,next) {
    const Payload = req.body;
    const parsedPayload = EmailSchema.safeParse(Payload);
    if(parsedPayload.success)
        next();
    else 
        res.status(411).json("Enter Valid Inputs");
}

module.exports = {UserSignUpValidator,EmailDataValidator};