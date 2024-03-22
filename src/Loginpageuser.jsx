import React, { useState } from 'react';
import LoginForm from './LoginFormuser';
import "./Loginpageadmin.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Loginpageuser() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
  <div className="background-image">
    <nav><Link to="/"  className='backhome' ><FontAwesomeIcon icon={faHome}  className='homeicon'/></Link>  </nav>
    <div className="beforecontainer">
        <div className="container cad">
          <div className="row">
             <div className="col-xl-7 col-lg-4 d-none d-md-block animated">
             <img src="https://cdni.iconscout.com/illustration/premium/thumb/easy-online-learning-1946855-1648374.png" alt="" className="src2" />
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
    </div>
    </div>

  );
}

export default Loginpageuser;
