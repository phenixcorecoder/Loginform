import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Students from './pages/Students';
import Dashvertical from './Dashvertical';
import Onlinecourse from './pages/Onlinecourse';
import { Assessment} from '@mui/icons-material';
import Schedule from './pages/Schedule';
import Discussion from './pages/Discussion';
import Settings from './pages/Settings';
import Dashhome from './pages/Dashhome';


export default function Dashboardadmin() {
  return (
    <div>
      <>
      <Dashvertical >
        <Routes>
          <Route path='/dash' element={<Dashhome />} />
            <Route path="/Students" element={ <Students />} />
            <Route path="/online-courses" element={ <Onlinecourse/>} />
            <Route path="/Assignment" element={ <Assessment />} />
            <Route path="/Schedule" element={ <Schedule />} />
            <Route path="/Discussion" element={ <Discussion />} />
            <Route path="/Settings" element={ <Settings />} />
        </Routes>
      </Dashvertical>
      </>
    </div>
  )
}

