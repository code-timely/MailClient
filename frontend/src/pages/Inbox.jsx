import { useEffect, useState } from "react";
import { TopBar } from "../components/TopBar"
import axios from "axios";
import { EmailRenderer } from "../components/EmailRenderer";

export const Inbox = () => {
    const [emails,setEmails] = useState([{}]);
    async function reqHandler() {
        try{
        const response = await axios.get("http://localhost:3000/user/inbox",{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        setEmails(response.data.receivedEmail);
    }
    catch(e){
        console.log(e);
        console.log("error occured in fetching emails");
    }  
    }
    useEffect( ()=>{
        reqHandler();
    },[])
    return (
        <>
        <div className="bg-slate-300 h-screen">
        <TopBar label={"Inbox"}></TopBar>
        
        <div>
        {emails.map((email)=>{
            console.log(email);
            return <EmailRenderer email={email} ></EmailRenderer>
        })}
        </div>
        </div>
        </>
    )
}
