import React, { useState } from 'react';
import LoginForm from './LoginForm';
import "./Loginpageadmin.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Loginpageadmin() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    
  <div className="background-image">
    <div className="design">
    <nav><Link to="/"  className='backhome' ><FontAwesomeIcon icon={faHome}  className='homeicon'/></Link>  </nav>
    <div className="beforecontainer">
        <div className="container cad">
          <div className="row">
             <div className="col-xl-7 col-lg-4 d-none d-md-block animated">
               <img src="https://elearn.adb.org/pluginfile.php/66664/course/overviewfiles/Asset%2011%20(1).png" alt="" className="src" />
              </div>
                <div className=" col-xl-4 col-lg-4  col-sm-11 bodypart">
                {isLoggedIn ?(
                <div>
                  <h1>Welcome User!</h1>
                  <button onClick={handleLogout}>Logout</button>
                  
                </div>
            ) : (
              <>
                  <LoginForm onLogin={handleLogin} ></LoginForm>
                
              </>
            )}
            </div>
          </div>
        </div>
    </div></div>
    </div>
  
  );
}

export default Loginpageadmin;

