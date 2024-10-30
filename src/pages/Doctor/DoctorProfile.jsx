import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function DoctorProfile() {

  const { dToken, profilData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profilData.address,
        fees: profilData.fees,
        available: profilData.available
      }
      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })
      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error);
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  return profilData && (
    <div>
      <div className='flex flex-col gap-4 m-5'>

        <div>
          <img className='bg-cyan-900/80 w-full sm:max-w-64 rounded-lg' src={profilData.image} alt="" />
        </div>

        <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>

          {/* --- Doc Info : name, degree,experience ---*/}
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profilData.name}</p>
          <div className='flex items-center gap-2 mt-1 text-gray-600'>
            <p>{profilData.degree} - {profilData.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{profilData.experience}</button>
          </div>

          {/* --- Doc About ---*/}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About : </p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{profilData.about}</p>
          </div>

          <p className='text-gray-600 font-mediun mt-4'>Appointment fees :
            <span className='text-gray-800'>{currency} {isEdit ? <input type="number" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profilData.fees} /> : profilData.fees}</span>
          </p>

          <div className='flex gap-2 py-2'>
            <p>Address : </p>
            <p className='text-sm'>
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profilData.address.line1} /> : profilData.address.line1}
              <br />
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profilData.address.line2} /> : profilData.address.line2}
            </p>
          </div>

          <div className='flex gap-1 pt-2'>
            <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profilData.available} type="checkbox" />
            <label htmlFor="">Available</label>
          </div>

          {
            isEdit
              ? <button onClick={updateProfile} className='px-4 py-1 border bg-cyan-900 text-white text-sm rounded-full mt-5 hover:bg-white hover:border-cyan-900 hover:text-cyan-900 transition-all'>Save</button>
              : <button onClick={() => setIsEdit(true)} className='px-4 py-1 border bg-cyan-900 text-white text-sm rounded-full mt-5 hover:bg-white hover:border-cyan-900 hover:text-cyan-900 transition-all'>Edit</button>
          }

        </div>

      </div>
    </div>
  )
}

export default DoctorProfile