//react imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//shoaib imports
import NoticeBoard from './NoticeDir/Notice-board';
import NoticeDetail from './NoticeDir/NoticeDetail';
import StaffHome from './Staff/StaffHome';
import CreateNotice from './Staff/CreateNotice';
import DeleteNotice from './NoticeDir/DeleteNotice';
import UpdateNotice from './NoticeDir/UpdateNotice';
//sehar imports
import NavBar from './RegistrationDir/NavBar';
import LoginForm from './RegistrationDir/LoginForm';
import Registerform from './RegistrationDir/Registerform';
import Firstpage from './RegistrationDir/Firstpage';
import ForgotPassword from './RegistrationDir/ForgotPassword';
import HomePage from './RegistrationDir/HomePage';
import Logout from './RegistrationDir/logout';
//imran imports
import Clearance from './ClearanceDir/Clearnce';
import RejectedClearance from './ClearanceDir/RejectedClearance';
import StaffClear from './Staff/staffClearance';
import Reason from './Staff/Reason';

//ameena & maham imports
import HomeTradingSharing from './TradingAndSharingDir/HomeTradingSharing';
import CreateTSPost from './TradingAndSharingDir/CreateTSPost';
import CreateTEPost from './TripsDir/CreateTEPost';
import CreateLSPost from './LostAndFoundDir/CreateLSPost';
import NotFound from './TradingAndSharingDir/NotFound';
import TSPostDetails from './TradingAndSharingDir/TSPostDetails';
import HomeLostFound from './LostAndFoundDir/HomeLostFound';
import LSPostDetails from './LostAndFoundDir/LSPostDetails';
import HomeTripsEvents from './TripsDir/HomeTripsEvents';
import TEPostDetails from './TripsDir/TEPostDetails';
import DeleteLSPost from './LostAndFoundDir/DeleteLSPost';
import DeleteTSPost from './TradingAndSharingDir/DeleteTSPost';
import DeleteTEPost from './TripsDir/HomeTripsEvents';
import UpdateLSPost from './LostAndFoundDir/UpdateLSPost';
import UpdateTEPost from './TripsDir/UpdateTEPost';
import UpdateTSPost from './TradingAndSharingDir/UpdateTSPost';

//
//
//
//Admin imports

//Sehar
import SHAdminUnderNav from './Admin/SH-AdminUnderNav';
import SHNavBarAdmin from './Admin/SH-NavBarAdmin';
import SHAddNewNotice from './Admin/SH-AddNewNotice';
import UpdateAdminNotice from './Admin/SH-NoticeEdit';
import DeleteAdminNotice from './Admin/SH-DeleteNotice';

//Maham
import MahNavbar from './Admin/MahNavbar';
import TEPostListAdmin from './Admin/TEPostListAdmin';
import TSPostListAdmin from './Admin/TSPostListAdmin';
import LFPostListAdmin from './Admin/LFPostListAdmin';

//Ameena
import HomeAdminHandleUser from './Admin/HomeAdminHandleUser';
import AdminUserCreate from './Admin/AdminUserCreate';
import AdminUserEdit from './Admin/AdminUserEdit';
import AdminUserDelete from './Admin/AdminUserDelete';
import AdminUserDetails from './Admin/AdminUserDetails';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sehar routes */}
        <Switch>
          <Route exact path="/">
            <Firstpage></Firstpage>
          </Route>

          <Route exact path="/Home">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/forgot">
            <ForgotPassword></ForgotPassword>
          </Route>

          <Route exact path="/login">
            <LoginForm></LoginForm>
          </Route>

          <Route exact path="/forgot">
            <NavBar></NavBar>
          </Route>

          <Route exact path="/login">
            <NavBar></NavBar>
          </Route>

          <Route exact path="/register">
            <Registerform />
          </Route>
          <Route path="/logout">
            <Logout/>
            </Route>

          {/* Shoaib routes */}
          <Route path="/notice-board">
            <NoticeBoard />
          </Route>
          <Route path="/notices/:id/:user">
            <NoticeDetail />
          </Route>
          <Route path="/delete/:id">
            <DeleteNotice />
          </Route>
          <Route path="/update/:id">
            <UpdateNotice />
          </Route>
          <Route path="/StaffHome">
            <StaffHome></StaffHome>
          </Route>
          <Route path="/CreateNotice">
            <CreateNotice></CreateNotice>
          </Route>

          {/* Imran routes */}
          <Route path="/Clearance">
            <Clearance />
          </Route>
          <Route path="/StaffClearance">
            <StaffClear />
          </Route>
          <Route path="/Reason">
            <Reason />
          </Route>
          <Route path="/RejectedClearance">
            <RejectedClearance />

          </Route>

          {/* Ameena & Maham routes */}
          <Route path="/HomeLostFound">
            <HomeLostFound />
          </Route>
          <Route path="/lfblogs/:id">
            <LSPostDetails />
          </Route>
          <Route path="/delete/:id">
            <DeleteLSPost />
          </Route>
          <Route path="/update/:id">
            <MahNavbar/>
            <UpdateLSPost />
          </Route>
          <Route path="/CreateLSPost">
            <CreateLSPost />
          </Route>

          <Route path="/CreateTSPost">
            <CreateTSPost />
          </Route>
          <Route path="/tsblogs/:id">
            <TSPostDetails />
          </Route>
          <Route path="/HomeTradingSharing">
            <HomeTradingSharing />
          </Route>
          <Route path="/NotFound">
            <NotFound />
          </Route>
          <Route path="/delete/:id">
            <DeleteTSPost />
          </Route>
          <Route path="/update/:id">
            <UpdateTSPost />
          </Route>
          
          <Route path="/CreateTEPost">
            <CreateTEPost />
          </Route>
          <Route path="/HomeTripsEvents">
            <HomeTripsEvents />
          </Route>
          <Route path="/teblogs/:id">
            <TEPostDetails />
          </Route>
          <Route path="/delete/:id">
            <DeleteTEPost />
          </Route>
          <Route path="/update/:id">
            <UpdateTEPost />
          </Route>
        </Switch>



        {/* Admin Routes */}

        <Switch>

          {/* Saher Admin Notice Handler */}
          <Route path="/admin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
              <div className="SH-Admin-home-content">
                <SHAdminUnderNav></SHAdminUnderNav>
              </div>
            </div>
          </Route>
          <Route path="/CreateNoticeAdmin">
            <SHAddNewNotice></SHAddNewNotice>
          </Route>
          <Route path="/editNotice/:id">
           <UpdateAdminNotice></UpdateAdminNotice>
          </Route>
          <Route path="/deleteNotice/:id">
            <DeleteAdminNotice></DeleteAdminNotice>
          </Route>

          {/* Maham Admin Post Handler */}
          <Route path="/tepostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <TEPostListAdmin />
          </Route>

          <Route path="/tspostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <TSPostListAdmin />
          </Route>

          <Route path="/lfpostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <LFPostListAdmin />
          </Route>

          {/* Ameena Admin User Handler */}
          <Route path="/HomeAdminHandleUser">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <HomeAdminHandleUser />
          </Route>

          <Route path="/user/:id">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <AdminUserDetails />
          </Route>

          <Route path="/updateUser/:id">
            <AdminUserEdit />
          </Route>

          <Route path="/deleteUser/:id">
            <AdminUserDelete />
          </Route>

          <Route path="/insertUserByAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <AdminUserCreate />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;


