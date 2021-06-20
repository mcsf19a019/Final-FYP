import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import TEPostListAdmin from './TEPostListAdmin';
import TSPostListAdmin from './TSPostListAdmin';
import LFPostListAdmin from './LFPostListAdmin';

const Navbar = () => {
    return (
     <nav className="navbarM">
        <div className="links">
            <Link to="/tsPostListAdmin" className="SH-Admin-nav-button">Trading and Sharing </Link>
            <Link to="/lfPostListAdmin" className="SH-Admin-nav-button">Lost and Found</Link>
            <Link to="/tepostListAdmin" className="SH-Admin-nav-button">Trips and Events</Link>
         </div>
     </nav> 

    );
}
 
export default  Navbar
