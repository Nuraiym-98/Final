import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";


import './styles/styles.scss'
import {Preloader} from "./pages/Preloader/Preloader";
import {Layout} from "./Layout/Layout";
import {Home} from './pages/Home/Home'
import {Register} from "./pages/Register/Regiser";
import {Login} from "./pages/Login/Login";
import {About} from "./pages/About/About";
import {Store} from "./pages/Store/Store";
import {NotFound} from "./pages/NotFound/NotFound";
import {Delivery} from "./pages/Delivery/Delivery";
import {Articles} from "./pages/Articles/Articles";
import {useSelector} from "react-redux";


export type formType = {
    agree: boolean,
    confirm: string,
    email: string,
    gender: string,
    name: string,
    password: string,
    phone: string,
    surname: string
}

export type userType = {
    user : formType
}


function App() {

    const {user}: any = useSelector<userType>(store => store.user)


    return (
    <Suspense fallback={<Preloader/>}>
        {
            user.length === 0 ?
                <Routes>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes> :

                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/store' element={<Store/>}/>
                        <Route path='/delivery' element={<Delivery/>}/>
                        <Route path='/articles' element={<Articles/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
        }
    </Suspense>
  );
}

export default App;
