import {Suspense, useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

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
import {useDispatch, useSelector} from "react-redux";
import {Tasting} from "./pages/Tasting/Tasting";
import {Catalog} from "./pages/Catalog/Catalog";
import {typeLocal, typeLocalUser} from "./models/models";
import {addUser} from "./redux/reducers/user";
import {AboutWine} from "./components/AboutWine/AboutWine";


function App() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {user}: any = useSelector<typeLocalUser>(store => store.user)

    useEffect(() => {
        dispatch(addUser(JSON.parse(localStorage.getItem('user') || '{}')))
    },[])


    useEffect(() => {
        navigate('/preloader')
    },[])


    return (
    <Suspense>
        {
            user.length === 0 ?
                <Routes>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes> :

                <Routes>
                    {/*<Route path='/preloader' element={<Preloader/>}/>*/}
                    <Route path='/' element={<Layout/>}>
                        <Route path='' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/store' element={<Store/>}/>
                        <Route path='/delivery' element={<Delivery/>}/>
                        <Route path='/articles' element={<Articles/>}/>
                        <Route path='/tasting' element={<Tasting/>}/>
                        <Route path='/catalog' element={<Catalog/>}/>
                        <Route path='/aboutWine/:id' element={<AboutWine/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
        }
    </Suspense>
  );
}

export default App;
