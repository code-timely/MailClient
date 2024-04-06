import { useNavigate } from "react-router-dom"
import { Button } from "./Button"


export const TopBar = ({label}) =>{
    const navigate = useNavigate();
    function composeHandler() {
        navigate("/compose");
    }
    function signoutHandler() {
        localStorage.removeItem("token");
        navigate("/signin");
    }
    return <div className="shadow h-14 flex justify-between bg-slate-200">
        <div className="text-4xl decoration-slate-100 font-sans font-semibold flex flex-col justify-center h-full ml-4">
            {label}
        </div>
        <div className="flex">
            <Button label = "Compose" onClick={composeHandler}></Button>
            <Button label="Sign Out" onClick={signoutHandler}></Button>
        </div>
    </div>
}