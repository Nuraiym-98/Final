import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store,{persistor} from "./redux/redux";
import {PersistGate} from "redux-persist/integration/react"
import {Preloader} from "./pages/Preloader/Preloader";
import {ChakraProvider} from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ChakraProvider>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={<Preloader/>} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </ChakraProvider>
);

