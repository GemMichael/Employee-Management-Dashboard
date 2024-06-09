import { Outlet, Link } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Layout.css';


function Layout(){
    return(

        <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
                <div className="mt-2">
                    <a className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline" role="button">
                        <span className="f5-4">Employee Mangement Dashboard</span>
                    </a>
                    <hr className="text-white d-none d-sm-block"></hr>
                    <ul class="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
                        <li class="nav-item my-1 py-2 py-sm-0">
                            <Link to="/EmployeeCard" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                <i className="bi bi-speedometer2"></i>
                                <span className="ms-2 d-none d-sm-inline">Employee Card</span>
                            </Link>
                        </li>
                        <li class="nav-item my-1 py-2 py-sm-0">
                            <Link to="AddEmployee" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                <i className="bi bi-person-plus"></i>
                                <span className="ms-2 d-none d-sm-inline">Add Employee</span>
                            </Link>
                        </li>
                        <li class="nav-item my-1 py-2 py-sm-0">
                            <Link to="/" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                <i className="bi bi-house"></i>
                                <span className="ms-2 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li class="nav-item my-1 py-2 py-sm-0">
                            <Link to="EditEmployee" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                <i className="bi bi-people"></i>
                                <span className="ms-2 d-none d-sm-inline">Edit Employee</span>
                            </Link>
                        </li>
                       
                    </ul>
                    
                </div>
                <div class="dropdown open">
                    <a
                        class="btn border-none dropdown-toggle text-white"
                        type="button"
                        id="triggerId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="bi bi-person f5-4"></i><span className="fs-5 ms-3 d-none d-sm-inline">Admin</span>
                    </a>
                </div>
                
            </div>
            <div className="col">
                    <Outlet />
                </div>
        </div>
    </div>

 
    </>


    )
    
}

export default Layout;