import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
    const loggedIn = true;
    if(!loggedIn) return(<Navigate to = {'/login'}/>)
    return ( 
        <div>
            <Header/>
            <Outlet/>
        </div>
     );
}
export default Layout;