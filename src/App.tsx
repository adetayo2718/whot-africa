
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./Components/LayoutPage"
import SignIn from "./Components/SignIn"
import Signup from "./Components/SignUp"
import LadningPage from "./Components/LandingPage"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route path="/" Component={LadningPage}/>
            <Route path="/login" Component={SignIn}/>
            <Route path="/signup" Component={Signup}/>
          </Route>
        </Routes>     
      </BrowserRouter>
    </div>
  )
}

export default App
