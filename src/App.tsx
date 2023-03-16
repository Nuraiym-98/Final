import {Suspense} from 'react';
import {Route,Routes} from "react-router-dom";


import './styles/styles.scss'
import {Preloader} from "./pages/Preloader/Preloader";
import {Layout} from "./Layout/Layout";
import {Home} from './pages/Home/Home'
import {Register} from "./pages/Register/Regiser";
import {Login} from "./pages/Login/Login";


function App() {

  return (
    <Suspense fallback={<Preloader/>}>

        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
            </Route>
        </Routes>

    </Suspense>
  );
}

export default App;
