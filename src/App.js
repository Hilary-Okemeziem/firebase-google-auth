import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './Navbar'
import Home from './Home'
import Signin from './Signin'
import Account from './Account'
import Protectedroute from './Protectedroute';



function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
