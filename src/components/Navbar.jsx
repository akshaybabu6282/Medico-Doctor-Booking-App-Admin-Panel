import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

function Navbar() {

    const { aToken, setAToken } = useContext(AdminContext)
    const {dToken,setDToken} = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

    return (
        <div className='flex justify-between items-center sm:px-10 border-b bg-cyan-50'>
            <div className='flex items-center gap-4 text-xs'>
                <div className='flex items-center'>
                    <img className='w-24 cursor-pointer' src={assets.admin_logo} alt="" />
                    <div>
                        <h1 className='text-cyan-800 text-2xl font-bold'>MEDICO</h1>
                        <p className='text-xs text-cyan-800'>DashBoard Panel</p>
                    </div>
                </div>
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button onClick={logout} className='bg-cyan-900 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar