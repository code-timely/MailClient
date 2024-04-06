import axios from "axios";
import { useEffect, useState } from "react"


export const Email= ({emailID})=> {
    console.log(emailID);
    const [email,setEmail] = useState({});
    async function reqHandler() {
        try{
        const response = await axios.post("http://localhost:3000/user/getEmail",
        {
            emailID: emailID
        }
        ,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        console.log(response.data.response);
        setEmail(response.data.response);
    }
    catch(e){
        console.log(e);
        console.log("error occured in fetching emails");
    }  
    }
    useEffect( ()=>{
        reqHandler();
    },[])
    return <div>HI
    </div>
}