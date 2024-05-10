import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {PersonData} = useContext(UserContext)
    
    if (!PersonData) return <div className='bg-slate-500  mt-4 w-fit mx-auto py-2 px-8 text-white rounded-sm '>Please fill the data</div>
    return <div className='bg-slate-500  mt-4 w-fit text-white  mx-auto py-2 px-8 rounded-sm'  >Person Data: {PersonData.PersonName} , {PersonData.PersonAddress} </div>

}

export default Profile