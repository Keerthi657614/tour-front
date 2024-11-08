import React from 'react'; 
import {Routes,Route,Navigate} from 'react-router-dom' 

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import ThankYou from "../pages/ThankYou.jsx";


const Routers=()=>{
    return (
    <Routes>
         <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/> 
        <Route path='/tour' element={<Tours/>}/> 
        <Route path='/tour/:id' element={<TourDetails/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/tour/search' element={<SearchResultList/>}/> 
        <Route path="/thank-you" element={<ThankYou />}/>
        <Route path="/login/Home" element={<Home />} />
    </Routes>
    );
};
export default Routers;