import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { Inbox } from "./pages/Inbox";
import { Compose } from "./pages/Compose";
import { Email } from "./pages/Email";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "signup" element = {<SignUp></SignUp>} />
      <Route path = "/" element = {<SignUp></SignUp>} />
      <Route path = "signin" element = {<SignIn></SignIn>} />
      <Route path = "inbox" element={<Inbox></Inbox>} />
      <Route path = "compose" element={<Compose></Compose>} />
      <Route path = "email" element={<Email></Email>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
