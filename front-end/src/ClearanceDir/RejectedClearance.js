import { useState,useEffect } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import {useHistory} from "react-router-dom"
import Axios from "axios";
const RejectedClearnce = ()=> {
    const[email, setemail]=useState("");
    const[UserName, setUserName]=useState("");
    const history = useHistory();


    useEffect( () => {

            ///get rejected clearnce data
            Axios.get("http://localhost:3001/getrejectClearncedata").then((Response) => {

                setUserName(Response.data.name);
                setemail(Response.data.studntemail);
                
                //setId(Response.data[0]._id);
              //console.log(Response.data._id)
              //console.log(Response.data);
    
            });

        
          ///get clreance status
        

    },[]);

    const deleteRejectData = (id) =>{
        Axios.delete("http://localhost:3001/deleteRejectClearance");
        history.push("/Clearance");

    }

    

    return(
        <div className="im-rejection">
            <NavBarHome />
        
            <h3 className="im-rejectionText">Dear Student {UserName} (Student ID : {email})   your Clearance Request has been reject</h3>

            <div className="im-resend">
                
                    <button className="im-resend-btn" onClick={() => deleteRejectData()}>Click me if you want to send request again</button>
                    
            </div>

        
        </div>
    )

}
export default RejectedClearnce;