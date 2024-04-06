const mongoose = require("mongoose");

// try{
//     async ()=>{
//     return await mongoose.connect('mongodb+srv://code_saks:Mummy1975@cluster0.e3k70l3.mongodb.net/web-client');
//     }
// }
// catch(err) {
//     console.log("Failed to connect to database due to error: "+err);
// }
mongoose.connect('mongodb+srv://code_saks:Mummy1975@cluster0.e3k70l3.mongodb.net/web-client');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    receivedEmail: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Email"
    }],
},{
    timestamps: true
});

const EmailSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

const User = mongoose.model('User',UserSchema);
const Email = mongoose.model('Email',EmailSchema);

module.exports = {User,Email};