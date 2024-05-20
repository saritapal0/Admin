import { BrowserRouter,  Routes,Route } from 'react-router-dom';
import Users from './pages/Users';
import Deshboard from './pages/Deshboard';
import Wallet from './pages/Wallet'
import Coupon from './pages/Coupon'
import Addon from './pages/Addon'
import News from './pages/News'
import Settings from './pages/Settings'
import Tasks from './pages/Tasks'
import Logout from './pages/Logout';
import FullLayout from './Layouts/FullLayouts';

const App = () => {
  return (
   
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<FullLayout/>}>
          <Route path='/deshboard' element={<Deshboard/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/coupon' element={<Coupon/>}/>
          <Route path='/addon' element={<Addon/>}/>
          <Route path='/news' element={<News/>}/> 
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          </Route>
          <Route path='/logout' element={<Logout/>}/>
          
          
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;