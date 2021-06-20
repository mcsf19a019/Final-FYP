import NavBarHome from '../RegistrationDir/NavbarHome';
import { useState,useEffect } from "react";
import Axios from "axios";
import { useParams, useHistory } from 'react-router-dom';


const Clearnce = () => {
    const[application, setApplication]=useState("Write your clearance application here");
    const[DCClearance, setDCClearance]=useState(false);
    const[SecretaryDCClearance, setSecretaryDCClearance]=useState(false);
    const[AssistanceTreasurer, setAssistanceTreasurer]=useState(false);
    const[Library, setLibrary]=useState(false);
    const[NetworkAdmin, setNetworkAdmin]=useState(false);
    const[ExamCoordinator, setExamCoordinator]=useState(false);
    const[ProgramCoordinator, setProgramCoordinator]=useState(false);
    const[MainLibray, setMainLibray]=useState(false);
    const[HostelSuperintendent, setHostelSuperintendent]=useState(false);
    const[StudentAffairsCoordinator, setStudentAffairsCoordinator]=useState(false);
    const[email, setemail]=useState("");
    const[UserName, setUserName]=useState("");
    const[error, setError]=useState("");
    let history = useHistory();


    


    useEffect( () => {

        Axios.get("http://localhost:3001/getUserInfo").then((Response) => {
            // console.log(Response.data); 
             setUserName(Response.data.name);
              setemail(Response.data.email);
              //console.log(Response.data.email);
    
            });


            ///get rejected clearnce data
            Axios.get("http://localhost:3001/getRejectClearncedata").then((Response) => {
              if(Response.data == "")
              {
                
              }
              else
              {
                console.log(Response.data);
                history.push("/RejectedClearance");

              }
             // console.log(Response.data);
    
            });

        
          ///get clreance status
        Axios.get("http://localhost:3001/getclearancestatus").then((Response) => {
            if(Response.data == "")
            {

            }
            else{
                setDCClearance(Response.data[0].dc);
            setSecretaryDCClearance(Response.data[0].seretaryDC);
            setAssistanceTreasurer(Response.data[0].assistanceTreasure);
             setLibrary(Response.data[0].library);
             setNetworkAdmin(Response.data[0].networkAdmin);
             setExamCoordinator(Response.data[0].examCoordinator);
             setProgramCoordinator(Response.data[0].programCoordinator);
             setMainLibray(Response.data[0].mainLibrary);
             setHostelSuperintendent(Response.data[0].hostelSuperintendent);
             setStudentAffairsCoordinator(Response.data[0].studentAffairsCoordinator);
            }
        //    console.log(Response.data);
        //    console.log(Response.data[0].dc);
           

          });

    },[]);
    


    const sendthereq=(e) =>{
        e.preventDefault();
        Axios.get("http://localhost:3001/usrCheckForReq").then((Response) => {
        if(Response.data == "")
        {
            Axios.post("http://localhost:3001/insertclearancereq",{
            
                application,
                email,
                UserName,    
                DCClearance,
                SecretaryDCClearance,
                AssistanceTreasurer,
                Library,
                NetworkAdmin,
                ExamCoordinator,
                ProgramCoordinator,
                MainLibray,
                HostelSuperintendent,
                StudentAffairsCoordinator
                });
        }
        else {
            setError("your request already submitted");
        }
        });
        

    };


    return (
        <div className="clearnce">
        <NavBarHome/>
            <h2 className="ClearanceTitle">Clearance Request</h2>
           
                <form>
                <div className="c1" id="body"> 

                  <textarea rows="13" cols="100" className="textarea1" required placeholder={application} onChange={(e) => setApplication(e.target.value)}></textarea>
                  </div>
                  <div className="c2" id="submit">
                      <button className="B1" type="submit" onClick={(e) =>sendthereq(e)}>Submit</button>
                      <br></br>
                  </div>
                  <div className="error">{error}</div>

                  <div className="status">
                      <br></br>
                        <h4 className="tableCaption">Clearance Status</h4>
                      <table className="table1">
                          
                          <tr className="tablecontent">
                              <th className="tableheader">Department Name</th>
                              <th className="tableheader">Status</th>
                          </tr>

                          <tr>
                              <td className="tablecontent">DC Clearance</td>
                              <td className="tablecontent">
                                  <input  className="tablerow" readOnly value={DCClearance}></input>
                              </td>
                          </tr>
                          
                          <tr>
                              
                              <td className="tablecontent"> Secretary DC Clearance</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={SecretaryDCClearance}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Assistance Treasurer</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={AssistanceTreasurer}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Library</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={Library}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Network Admin</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={NetworkAdmin}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Exam Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={ExamCoordinator}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Program Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={ProgramCoordinator}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Main Library</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={MainLibray}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Hostel Superintendent</td>
                              <td className="tablecontent">
                                  <input className="tablerow"readOnly value={HostelSuperintendent}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Student Affairs Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={StudentAffairsCoordinator}></input>
                              </td>
                          </tr>

                                
                      </table>
                  </div>
                </form>
                <br/>
               <br/>
           
        </div>
      );
}
 
export default Clearnce;
