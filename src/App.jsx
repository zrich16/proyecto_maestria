
import AppRoutes from '../src/rutas/routes';
import Login from './pages/login/login'
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
    <div>
        <BrowserRouter>
         <AppRoutes />
        </BrowserRouter>
     
    </div>
  );

//   return (
//     <>
//  <div className="w-full">
//       <Login />
//     </div> 

  
//     </>
//   )
}

export default App
