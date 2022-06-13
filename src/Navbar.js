import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'

const Navbar = () => {
  const {user, logout} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'>
        Firebase Google Authentication
      </h1>
      {user?.displayName ? (<button onClick={handleSignOut}>Logout</button>) : (<Link to='/signin'>Sign In</Link>)}
      
    </div>
  );
};

export default Navbar