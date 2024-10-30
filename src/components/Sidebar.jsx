import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

function Sidebar() {

  const { aToken } = useContext(AdminContext)
  const { dToken } = useContext(DoctorContext)
  return (
    <div className='min-h-screen bg-cyan-900 border-r text-white'>
      {
        aToken && <ul className='mt-5'>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-cyan-50 text-black border-r-4 border-cyan-900' : ''}`} to={'/admin-dashboard'}>
            <i class="fa-solid fa-house"></i>
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-cyan-50 text-black border-r-4 border-cyan-900' : ''}`} to={'/all-appointments'}>
            <i class="fa-solid fa-calendar-days"></i>
            <p className='hidden md:block'>Appointments</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-cyan-50 text-black border-r-4 border-cyan-900' : ''}`} to={'/add-doctor'}>
            <i class="fa-solid fa-square-plus"></i>
            <p className='hidden md:block'>Add Doctor</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-cyan-50 text-black border-r-4 border-cyan-900' : ''}`} to={'/doctor-list'}>
            <i class="fa-solid fa-users"></i>
            <p className='hidden md:block'>Doctor List</p>
          </NavLink>
        </ul>
      }

      {
        dToken && <ul className='mt-5'>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-cyan-50 text-black border-r-4 border-cyan-900' : ''}`} to={'/doctor-dashboard'}>
            <i class="fa-solid fa-house"></i>
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-cyan-50 text-black border-r-4 border-cyan-900' : ''}`} to={'/doctor-appointments'}>
            <i class="fa-solid fa-calendar-days"></i>
            <p className='hidden md:block'>Appointments</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-cyan-50 text-black border-r-4 border-cyan-900' : ''}`} to={'/doctor-profile'}>
            <i class="fa-solid fa-users"></i>
            <p className='hidden md:block'>Profile</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar