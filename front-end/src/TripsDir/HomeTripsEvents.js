import TEPostList from "./TEPostList";
import { useState, useEffect } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import TEMiniNavBar from './TEMiniNavbar';
import Axios from 'axios';

const HomeTripsEvents = () => {
  const [teblogs, setBlogs] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getSTePosts").then((Response) =>{  
      setBlogs(Response.data);
    })
  }, [])

  return (
    <div className="home">
    <NavBarHome/>
    <TEMiniNavBar title={"Trips & Events"}/>
      <TEPostList blogs={teblogs} user={"student"} />
    </div>
  );
}
 
export default HomeTripsEvents;
