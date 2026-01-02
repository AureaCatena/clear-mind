import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTherapist from './pages/Admin/AddTherapist';
import TherapistsList from './pages/Admin/TherapistsList';
import { TherapistContext } from './context/TherapistContext';
import TherapistDashboard from './pages/Therapist/TherapistDashboard';
import TherapistAppointments from './pages/Therapist/TherapistAppointments';
import TherapistProfile from './pages/Therapist/TherapistProfile';


const App = () => {

  const { aToken } = useContext(AdminContext)
  const { tToken } = useContext(TherapistContext)

  return aToken || tToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          // Admin Routes
          <Route path='/' element={<></>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-therapist' element={<AddTherapist />} />
          <Route path='/therapists-list' element={<TherapistsList />} />

          // Therapist Routes
          <Route path='/therapist-dashboard' element={<TherapistDashboard />} />
          <Route path='/therapist-appointments' element={<TherapistAppointments />} />
          <Route path='/therapist-profile' element={<TherapistProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer/>
    </>
  )
}

export default App