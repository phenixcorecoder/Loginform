import * as React from 'react';
import {Routes ,Route} from "react-router-dom";
import Homepage from './Homepage';
import Loginpageadmin from './Loginpageadmin';
import Loginpageuser from './Loginpageuser';
import Dashboard from './Dashboardadmin';



function App(){
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage /> } />
                <Route path="about" element={<Loginpageadmin />} />
                <Route path="then" element={<Loginpageuser />} />
                <Route path="dash" element={<Dashboard />} />
            </Routes>
        </div>
    )
}
export default App;