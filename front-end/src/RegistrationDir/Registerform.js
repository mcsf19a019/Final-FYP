import { Link,useHistory } from "react-router-dom";
import Navbar from './NavBar';
import { useState } from 'react';
import Axios from 'axios';


const Registerform = () => {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPass, SetconfirmPass] = useState('');
    const[userType,setUserType]=useState('student');
    const[error,setError]=useState('');
    const [emailErr, setemailErr] = useState('');
    const [passErr, setpassErr] = useState('');
    const [reqField, setReqField] = useState('');
    let history = useHistory();

    const AddUserToDb=(e)=>{
        e.preventDefault();
        setUserType("student");
        setError("");
        setemailErr("");
        setpassErr("");
        setReqField("");
        if(name == "" || email == "" || password == "" || confirmPass =="")
        {
            setReqField("Required Field");
        }
        else if(password.length < 8 || confirmPass.length < 8)
        {
            setError("minimum password length is 8");
        }
        else if(password==confirmPass)
        {
            Axios.post("http://localhost:3001/register",
          {
            name,email,password,confirmPass,userType
           
          }).then((Response)=>{
          if(Response.data ==  true)
          {
              history.push("/login");
          }
          if(Response.data.errors != null)
            {
            setemailErr(Response.data.errors.email);
            setpassErr(Response.data.errors.password);
            }
          });

        }
        else
        {
            
            setError("Password not Matched");
        }
    };

    return (

        <div className="form-content">
            <Navbar />
            <form className="form1">
                <div className="form-headings">
                    <h2>Let's get started today!</h2>
                </div>
                <div className="error">
                {reqField}
                </div>
                 <div className="register-inputs"> 
                    <label className="form-label">Name</label>
                    <input className="forminputs"
                        type="text"
                        required
                        name='name'
                        placeholder='Enter your name here'
                        onChange={(event) => {
                            SetName(event.target.value)
                        }}
                    ></input>
                </div>
                <div className="error">
                        {emailErr}
                    </div>
                <div className="register-inputs">
                    <label className="form-label">Email</label>
                    <input className="forminputs"
                        type="email"
                        required
                        name='email'
                        placeholder='jon@pucit.edu.pk'
                        onChange={(event) => {
                            SetEmail(event.target.value)
                        }}
                    ></input>
                </div>
                <div className="error">
                { passErr}
                {error}    
               </div>


                <div className="register-inputs">
                    <label className="form-label">Password</label>
                    <input className="forminputs"
                        type="password"
                        required
                        minLength="8"
                        name='password'
                        placeholder='Password'
                        onChange={(event) => {
                            SetPassword(event.target.value)
                        }}
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label"> Confirm Password</label>
                    <input className="forminputs"
                        type="password"
                        required
                        minLength="8"
                        name='password'
                        placeholder='Confirm Password'
                        onChange={(event) => {
                            SetconfirmPass(event.target.value)
                        }}
                    ></input>
                </div>
                    <button onClick={(e) =>AddUserToDb(e)} className='Signup-butn' >
                        Sign Up
                    </button>
                <span className='form-input-login'>
                    <h5>Already have an account? Login</h5>
                    <Link to="/login"> here </Link>
                </span>
            </form>


        </div>
    );
}

export default Registerform;