import { Link } from 'react-router-dom';
import './style.scss'
const SignIn = () => {

    return ( 
        <div className=" entire-signin-page">
            <div className='login-container'>
                <div className='img_text'>
                    <img src="https://res.cloudinary.com/dvgkyxjsa/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688927908/Games_4_Africa_1_fr8fvg.jpg?_s=public-apps" alt="game logo" />
                    <h4 className='py-2 fw-bold'>Login And Have Fun</h4>
                </div> 
                <div className='user_pass-container'>
                    <div className='user_pass'>
                        <div className="d-flex flex-column gap-3 label-text">
                            <div>
                                <label>Username</label><br />
                                <input className='form-control mt-2' type="text" placeholder='Type username' />
                            </div>
                            <div>
                                <label>Password</label><br />
                                <input className='form-control mt-2' type="password" placeholder='At least 8 characters' />
                            </div>
                        </div>
                        <div className='forgot-password_remember-password d-flex justify-content-between mt-3'>
                            <p><span className='checkbox'><input type="checkbox" name='checked'/></span>Remember me</p>
                            <p className='forget-pass'>Forgot password?</p>
                        </div>
                        <button className='btn btn-primary py-2 mt-2 button-login'>Login</button>
                        <p className='fw-bold mt-3'>Dont have and account? <span><Link to = {'/signup'}>Sign up</Link></span></p>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default SignIn;