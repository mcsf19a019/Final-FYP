import {Link} from 'react-router-dom';
import logo from './image-removebg-preview.png';

const NavbarHome = () => {
    return (   
        <div className="navbar">

        <div className="header-fixed">
        
        
          <nav className="navbar navbar-light  ">
            <Link className="navbar-brand" to="/notice-board">
              <img src={logo} width="331" heigth="110" className="d-inline-block align top" alt="STUDENT ASSISTANCE"></img>
            </Link>
        
            
        
        
        
        
            <div className="Home-nav-content">
            <div className="navHome">
              <Link to="/notice-board" alt="HOME" >HOME</Link>
              <Link to="/HomeLostFound" alt="LOST AND FOUND">LOST & FOUND</Link>
              <Link to="/HomeTradingSharing" alt="SELL AND BUY">TRADING & SHARING</Link>
              <Link to="/HomeTripsEvents" alt="TRIPS AND EVENTTS">TRIPS AND EVENTS</Link>
              <Link to="/clearance" alt="CELERANCE">CLEARANCE</Link>
              <Link to="/logout" alt="Logout">LOGOUT</Link>
          </div>
              
            </div>
          </nav>
        </div>
        </div>
     );
}
 
export default NavbarHome;