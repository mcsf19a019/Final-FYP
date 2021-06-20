import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[userType, setUserType]=useState('student');
  const history = useHistory();

  const AddUserToDb=()=>{
    Axios.post("http://localhost:3001/insertUserByAdmin",
    {
        name,email,password,userType
    });
    history.push('/HomeAdminHandleUser');
  };

  return (
    <div className="create">
      <h2>Add a New User</h2>

      <form>
        <div className="register-inputs">
          <label className="form-label">Username</label>
          <input className="forminputs"
            type="text"
            required
            name='name'
            value={name}
            placeholder='Enter your name here'
            onChange={(event) => {
                setName(event.target.value)
            }}
            placeholder='Enter Username'
          />
        </div>
        <div className="register-inputs">
          <label className="form-label">User's email</label>
          <input className="forminputs"
            type="email"
            required
            name='email'
            value={email}
            placeholder='jon@pucit.edu.pk'
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            placeholder='kelen@pucit.edu.pk'
          />
        </div>
        <div className="register-inputs">
         <label className="form-label">Password</label>
         <input className="forminputs"
            type="password"
            required
            minLength="8"
            value={password}
            name='password'
            placeholder='Password'
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            placeholder='Password'
          />
        </div>
        <div className="register-inputs">
         <label className="form-label">Select user type: </label>
         <select name={userType} value={userType} 
            onChange={(event) => {
              setUserType(event.target.value)
          }}>
            <option value="student">Student</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
        <button onClick={AddUserToDb}>
          Add User
        </button>
      </form>
    </div>
  );
}
 
export default Create;