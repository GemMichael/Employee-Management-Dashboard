import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import EmployeeList from './EmployeeList';
import EmployeeCard from './EmployeeCard';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import { EmployeeProvider } from './EmployeeContext';
import Login from './auth/Login';
import Register from './auth/Register';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



function App(){

    return (
        <BrowserRouter>
        <EmployeeProvider>
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route index element={<EmployeeList />}/>
            <Route path='EmployeeCard' element={<EmployeeCard />}/>
            <Route path='AddEmployee' element={<AddEmployee />}/>
            <Route path='EditEmployee' element={<EditEmployee />}/>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            </Route>
        </Routes>
        </EmployeeProvider>
        </BrowserRouter>
    )

}

export default App