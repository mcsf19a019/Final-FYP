import TSPostList from "./TSPostList";
import { useState, useEffect } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import TSMiniNavBar from './TSMiniNavbar';
import Axios from 'axios';

const HomeTradingSharing = () => {
  const [tsblogs, setBlogs] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getSTsPosts").then((Response) =>{  
      setBlogs(Response.data);
    })
  }, [])

  return (
    <div className="home">
    <NavBarHome/>
    <TSMiniNavBar title={"Trading & Sharing"}/>
      <TSPostList blogs={tsblogs} user={"student"} />
    </div>
  );
}

export default HomeTradingSharing;
