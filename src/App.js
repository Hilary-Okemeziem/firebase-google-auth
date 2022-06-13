import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './Navbar'
import Home from './Home'
import Signin from './Signin'
import Account from './Account'
import Protectedroute from './Protectedroute';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1 className='text-center text-3xl font-bold mt-8'>Google Authentication and Context</h1> */}
        <AuthContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/account' element={
            <Protectedroute>
              <Account/>
            </Protectedroute>}/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
