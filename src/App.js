import SignUp from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { getItem } from './utils/storage.jsx';
import Main from './pages/Main2/Main.jsx';

function PrivateRoutes({ redirectTo }) {
  const authentication = getItem('token');
  return authentication ? <Outlet /> : <Navigate to={redirectTo} />
}


function PublicRoutes({ redirectTo }) {
  const authentication = getItem('token');
  return authentication ? <Navigate to={redirectTo} /> : <Outlet />
}


function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PublicRoutes redirectTo={'/Main'} />} >
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoutes redirectTo={'/login'} />}>
          <Route path='/Main' element={<Main />}>
            <Route path='' element={<Main />} />
          </Route>
        </Route>
      </Routes >
    </>
  );
}

export default MainRoutes;
