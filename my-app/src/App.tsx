import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Company from './pages/Company';
import Overview from './pages/Overview';
import Report from './pages/Report';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* auth */}
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

          {/* dashboard */}
          <Route path='/overview' element={<Overview />} />
          <Route path="/company" element={<Company />} />
          <Route path='/report' element={<Report />} />
          
          {/* user */}
          {/* ... */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
