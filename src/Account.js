import React from 'react'
import { UserAuth } from './context/AuthContext'

const Account = () => {
  const {logout, user} = UserAuth();


  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button className='border py-2 px-5 mt-10' onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Account