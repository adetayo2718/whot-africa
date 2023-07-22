import "./style.scss"
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <header className='whole-app-header'>
            <div className="container">
            <div className="d-flex justify-content-between ">
                <div className="py-2">
                    <img className=" py-2" src="https://res.cloudinary.com/dvgkyxjsa/image/upload/v1689966750/Logo_vvxzlj.png" alt="logo" />
                </div>
                <div className="links d-flex flex-row align-items-center gap-4 ">
                    <Link to ={'/'}>Home</Link>
                    <Link to ={'/'}>About</Link>
                    <Link to ={'/'}>How to play</Link>
                    <Link to ={'/'}>FAQ</Link>
                    <Link to ={'/'}>Contact</Link>
                    <Link to ={'/login'} className="btn btn-primary custom-button px-3">Login</Link>
                </div> 
            </div>
            </div>
            
        </header>
     );
}
 
export default Header;