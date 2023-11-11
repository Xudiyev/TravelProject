import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/index';
import { Country } from './pages/Country';
import { Destinations } from './pages/Destination';
import LogIn from './pages/CreateAccauntPages/LogInPage'
import PasswordChangePage from './pages/CreateAccauntPages/PasswordChangePage';
import SignInPage from './pages/CreateAccauntPages/SignInPage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs/index';
import Blog from './pages/Blog';
import ItalyPage from './pages/Country/ItalySection';
import FaqPage from './pages/FAQ';


const rootElem = document.getElementById('root')
const root = ReactDOM.createRoot(rootElem);
root.render(
  <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/italy'  element={<ItalyPage/>} />



        <Route path='/logIn' element={<LogIn />} />
        <Route path='/passwordChange' element={<PasswordChangePage />} />
        <Route path='/signIn' element={<SignInPage />} />


        <Route path='destination'>
            <Route index  element={<Destinations/>} />
            <Route path=':country' element={<Country/>} />

        </Route>
        <Route path='404' element = {<h1>404Page</h1>} />
        <Route path='*' element = {<Navigate to ="/404"/>}/>
    </Routes>
  </BrowserRouter>
);

