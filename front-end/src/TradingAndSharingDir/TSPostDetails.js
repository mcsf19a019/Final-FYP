import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import TSMiniNavBar from './TSMiniNavbar';
import Axios from 'axios';

const TSPostDetails = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date,setDate] = useState('');
  const { id, user } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/getTsPost/${id}`).then((Response) =>{  
    setTitle(Response.data.title);
    setBody(Response.data.content);
    setDate(Response.data.date);
    })
  }, [])
  
  return (
    <div>
      <NavBarHome/>
      <TSMiniNavBar title={"Trading & Sharing"}/>
      <br/> 
      <div className="post-details">
        <div className="posts_detailPosts">
        <h3 className="posts_detailPosts_title"><b className="posts_date">Title:</b> {title.toUpperCase()}</h3>
          <br/>
          <h5 className="posts_detailPosts_body"><b className="posts_date">Content:</b> {body}</h5>
          <br/>
          <br/>
          <h6 className="posts_detailPosts_date"><b className="posts_date">Publish Date:</b> {date}</h6>
        </div>
      </div>
    </div>
  );
}
 
export default TSPostDetails;
