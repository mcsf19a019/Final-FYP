import { Link, useHistory } from "react-router-dom";
import NavBar from './NavBar'
import { useState } from 'react';
import Axios from 'axios';


const LoginForm = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [emailErr, setemailErr] = useState("");
    const [passErr, setpassErr] = useState("");
    const history = useHistory();
    
   const checkUser = (e) =>{
       e.preventDefault();
       setemailErr("");
        setpassErr("");
    Axios.post("http://localhost:3001/userLogin",{email,password})
    .then((Response) =>{
        if(Response.data.user != null)
        {
            if(Response.data.usertype == "student")
            {
                history.push("/notice-board");
            }
            else if(Response.data.usertype == "Admin")
            {
                history.push("/admin");
            }
            else if(Response.data.usertype == "Staff")
            {
                history.push("/staffHome");
            }
        }
        if(Response.data.errors != null)
        {
            setemailErr(Response.data.errors.email);
            setpassErr(Response.data.errors.password);
        }
    })
    .catch((err) => {

    });

   }

    return ( 
        <div className="form-content">
            <NavBar></NavBar>

            <form className="form">
             <div className="form-headings">
             <h2>Welcome to </h2>
            <h2>Student Assistance</h2>
                 </div>   
           
             <div className="form-inputs">
                 <label className="form-label" >Email</label>
                 <br></br>
                <input className="my-forminputs"
                type="email"
                name='name'
                value={email}
                placeholder ='Enter your email here'
                onChange = {(e) => setemail(e.target.value)}
                 ></input>
             </div>
                <div className="error">{emailErr}</div>
             <div className="form-inputs">
                 <label className="form-label" >Password</label>
                <input className="my-forminputs"
                type="password"
                name='name'
                value={password}
                placeholder='Password'
                onChange={(e) => setpassword(e.target.value)}
                 ></input>
             </div>
             <div className="error">{passErr}</div>
        <button className='Signup-butn' onClick={(e) =>checkUser(e)}>
          Log In
        </button>
        
        <br></br>
            </form>
        </div>

     );
}
 
export default LoginForm;   