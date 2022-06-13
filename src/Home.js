import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'


const Home = () => {
  const {user, logout} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-7'>
        Home Page
      </h1>
      <div className='text-center text-xl'>
        {user?.displayName ? (<button onClick={handleSignOut}>Logout</button>) : (<Link to='/signin'>Sign in to your account using Google</Link>)}
      </div>
    </div>
  )
}

export default Home