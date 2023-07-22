import { Link } from 'react-router-dom';
import './style.scss'
const Signup = () => {
    return ( 
        <div className=" entire-signin-page">
            <div className='login-container'>
                <div className='img_text'>
                    <img src="https://res.cloudinary.com/dvgkyxjsa/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688927908/Games_4_Africa_1_fr8fvg.jpg?_s=public-apps" alt="game logo" />
                    <h4 className='mt-2 fw-bold'>Sign up and have fun</h4>
                </div> 
                <div className='user_pass-container'>
                    <div className='user_pass'>
                        <div className="d-flex flex-column gap-2 label-text">
                            <div>
                                <label>Username</label><br />
                                <input className='form-control mt-1' type="text" placeholder='Type username' />
                            </div>
                            <div>
                                <label>Password</label><br />
                                <input className='form-control mt-1' type="password" placeholder='At least 8 characters' />
                            </div>
                            <div>
                                <label>Email</label><br />
                                <input className='form-control mt-1' type="text" placeholder='Type email address' />
                            </div>
                        </div>
                        <div className='mt-1'>
                            <p>By clicking Sign Up, you are agreeing to the Terms of Use <br /> including the arbitration clause and you are acknowledging the <br /> Privacy Policy</p>
                            
                        </div>
                        <button className='btn btn-primary py-1 mt-1 button-login'>Sign up</button>
                        <p className='fw-bold mt-2'>Already have an account? <span><Link to = {'/login'}>Login</Link></span></p>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Signup;