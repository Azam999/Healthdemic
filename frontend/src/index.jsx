import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Error404Page from './pages/Error404Page';
import DietPlanPage from './pages/DietPlanPage';
import HomePage from './pages/HomePage';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path='/register' element={<RegisterPage />} />
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/diet-plan' element={<DietPlanPage />} />
            <Route path='*' element={<Error404Page />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
