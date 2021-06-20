import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useState,useEffect } from "react";

const AdminUserList = ({ User, title }) => { 

  const [author, setAuthor] = useState('');

  useEffect( () => {
    Axios.get("http://localhost:3001/getUserInfo").then((Response) => {
          setAuthor(Response.data.email);
        });
  },[]);

  return (
    <div className="post-list">
      <nav className="navbarUser">
        <h1>{ title }</h1>
        <div className="links">
          <Link to="/insertUserByAdmin" style={{ 
            color: 'white', 
            backgroundColor: '#2F9DC6',
            borderRadius: '8px' 
          }}>Add New User</Link>
        </div>
      </nav>


      {User.map(user => ( 
        <div>
        {author != user.email ? (
          <div className="user-preview" key={user._id} >
           <Link to={`/user/${user._id}`}><h2>{ user.email }</h2>
           </Link> 
           <Link to={`/updateUser/${user._id}`}>
           <button className="SH-Admin-Noticebtn" >Edit</button>
           </Link>
           <Link to={`/deleteUser/${user._id}`}>
           <button className="SH-Admin-Noticebtn" >Delete</button>
           </Link>
         </div>
        ) : (
         console.log("Admin cannot edit/delete itself :D")
        )}          
       </div>
     ))}
   </div>
  );
}
 
export default AdminUserList;