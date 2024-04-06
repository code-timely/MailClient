import { useEffect, useState } from "react"
import { ComposeInputBox } from "../components/ComposeInputBox"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";


export const Compose = () => {
    const [from,setFrom] = useState("");
    const [to,setTo] = useState("");
    const [subject,setSubject] = useState("");
    const [body,setBody] = useState("");
    const navigate = useNavigate();

    async function reqHandler() {
        const response = await axios.get("http://localhost:3000/user/getUserEmailID",{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        console.log(response.data.email);
        setFrom(response.data.email);
    }

    useEffect( ()=>{
        reqHandler();
    },[])

    function sendHandler() {
        const response = axios.post("http://localhost:3000/user/compose",{
            from: from,
            to: to,
            subject: subject,
            data: body
        },{
            headers: {
            Authorization: localStorage.getItem("token")
        }

        })
        navigate("/inbox");
    }

    return <div className="bg-slate-300 h-screen">
        <br/><br/>
        <div>
        <div className="flex flex-col justify-center">
        <div className="bg-slate-200 rounded-lg bg-white  text-center p-2 h-max px-4">
            <ComposeInputBox label="to: " placeholder="" onChange={e=>setTo(e.target.value)} ></ComposeInputBox><br/><br/>
            <ComposeInputBox label="subject: " placeholder="" onChange={e=>setSubject(e.target.value)}   ></ComposeInputBox><br/><br/>
            <div className="flex">
            <div className="text-sm font-medium text-left py-2">Body: </div>
            <textarea
                onChange={e=>setBody(e.target.value)}
                placeholder={""}
                className="w-full overflow-auto px-2 py-1 border rounded border-slate-200"
            />
            </div>
            <div className="flex justify-center w-40 mt-10">
            <Button onClick={sendHandler} label="Send"></Button>
            </div>
        </div>
        </div>
        </div>
    </div>
}