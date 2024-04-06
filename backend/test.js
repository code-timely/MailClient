// const z = require("zod");
// const t = new Date();
// const date = t.getFullYear();
// //const month
// console.log(date);
// try{
//     z.date().parse('2024-03-30')
// }
// catch(err) {
//     console.log(err.message);
// }
// console.log(z.date().safeParse('2024-03-30'))
// const dateSchema = z.coerce.date();

// console.log(dateSchema.safeParse('2024-03-30'));
// if(9118052439) console.log("Hi");
// else console.log("Bye");

// // // const EmailSchema = z.object({
// // //     from : z.string().email(),
// // //     to : z.string().email(),
// // //     subject : z.string(),
// // //     body : z.string()
// // // });

// // // const ob={
// // //     from : "sks@gmail.com",
// // //     to : "lko@gmail.com",
// // //     subject : "",
// // //     body : "there you go"
// // // }

// // // //console.log(EmailSchema.safeParse(ob));

// // // try{
// // //     EmailSchema.parse(ob)
// // // }catch(err){
// // //     console.log(err);
// // // }
// // // if("") console.log("hi");
// // // else console.log("bye");

// // const express = require("express");
// // const jwt = require("jsonwebtoken");
// // const app = express();

// // app.use(express.json());

// // const posts = [
// //     {
// //         username : "Saksham",
// //         title : "T1"
// //     },
// //     {
// //         username : "Agarwal",
// //         title : "T2"
// //     }
// // ]


// // app.get('/posts',(req,res)=>{
// //     res.json(posts);
// // })

// // app.post('/login',(req,res)=>{
// //     const username = req.body.username;
// //     const password = req.body.password;
// //     jwt.sign
// // })

// // app.listen(3006);
const jwt = require("jsonwebtoken");
const mobile = "9118052439";
const token = jwt.sign(mobile,"Saks");
console.log(jwt.decode(token));
console.log(jwt.verify("","Saks"));