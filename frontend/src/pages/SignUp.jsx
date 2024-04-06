import { useState } from "react"
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomMessage } from "../components/BottomMessage";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    console.log("Signup got hit");

    const signupHandler= async ()=> {
        const response = await axios.post("http://localhost:3000/user/signup",{
            name,
            mobile,
            email,
            password
        })
        localStorage.setItem("token", response.data.token)
        navigate("/inbox");
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="bg-slate-100 rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e=>setName(e.target.value)} placeholder="Saksham" label={"Name"} />
        <InputBox onChange={e=>setMobile(e.target.value)} placeholder="94XXXXXX45" label={"Mobile"} />
        <InputBox onChange={e=>setEmail(e.target.value)} placeholder="sakshamag23@iitk.ac.in" label={" Set Email ID"} />
        <div>
      <div className="text-sm font-medium text-left py-2">
        Password
      </div>
      <input onChange={e=>setPassword(e.target.value)} placeholder="Minimum 8 characters" type="password" className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
        <div onClick={signupHandler} className="pt-4">
          <Button label={"Sign up"} />
        </div>
        <BottomMessage label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
      </div>
    </div>
  </div>
}