import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomeTemplate from './pages/HomeTemplate';
import HomePage from './pages/HomeTemplate/HomePage';
import DetailPage from './pages/HomeTemplate/DetailMoviePage';
import NowPlaying from './pages/HomeTemplate/Nowplaying';
import CommingSoon from './pages/HomeTemplate/Commingsoon';
import Login from './pages/HomeTemplate/AuthPage';
import Booking from './pages/HomeTemplate/Booking';

import AdminTemplate from './pages/AdminTemplate';
import AddMoviePage from './pages/AdminTemplate/AddMoviePage';
import Adduser from './pages/AdminTemplate/AddUserPage';
import Dashboard from './pages/AdminTemplate/DashboardPage';
import Loader from './components/Loader';



function App() {
  return (
    <Suspense fallback={<Loader />}>

      <BrowserRouter>
        <Routes>

          {/* HomeTemplate */}
          <Route path='' element={<HomeTemplate />}>
            <Route index element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='now-playing' element={<NowPlaying />} />
            <Route path='coming-soon' element={<CommingSoon />} />
            <Route path='detail/:id' element={<DetailPage />} />
            <Route path='booking/:id' element={<Booking />} />
          </Route>

          <Route path='auth' element={<Login />}></Route>

          {/* AdminTemplate */}
          <Route path='admin' element={<AdminTemplate />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='adduser' element={<Adduser />} />
            <Route path='addmovie' element={<AddMoviePage />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </Suspense >
  );
}

export default App;
