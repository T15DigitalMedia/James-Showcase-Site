import React, {useState} from "react";
import { auth } from "../../firebase";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
            setPassword(value);
        }
    };

  return (
    <section className="section" id="contact">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2><span className="font-weight-bold">Sign</span> In</h2>
                        {error !== null && <div className = "py-4 bg-red-600 w-full text-danger text-center mb-3">{error}</div>}
                    </div>
                </div>
            </div> 
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="form-kerri contact_form">
                        <div id="message"></div>
                        <form name="contact-form" id="working_form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="userEmail" id="userEmail" type="email" className="form-control" placeholder="Your email..." onChange = {(event) => onChangeHandler(event)}/>
                                    </div>
                                </div>   
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="userPassword" id="userPassword" type="password" className="form-control" placeholder="Your Password..." onChange = {(event) => onChangeHandler(event)}></input>
                                    </div>
                                </div>                             
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <button className="submitBnt btn btn-custom text-uppercase" onClick={(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    </section>
  );
};
export default SignIn;