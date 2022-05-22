import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Erro from './pages/Erro';
import Header from "./components/header";

function RoutesApp(){
    return(
    <BrowserRouter>
     <Header/>
        <Routes>
        <Route path="/"  component={<Home/>}/>
        <Route path="/filme/:id"  component={<Filme/>}/>
        <Route path="*" component={ <Erro/> } />
        </Routes>
    </BrowserRouter>
    );
}


export default RoutesApp;