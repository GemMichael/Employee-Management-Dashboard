import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseApp from "./firebaseConfig";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Layout.css';

function Layout() {
    const [authenticated, setAuthenticated] = useState(false);
    const [userProperties, setUserProperties] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth(firebaseApp);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticated(true);
                setUserProperties(user);
            } else {
                setAuthenticated(false);
                setUserProperties({});
            }
        });
    }, []);

    const logout = () => {
        const auth = getAuth(firebaseApp);
        signOut(auth).then(() => {
            setAuthenticated(false);
            setUserProperties({});
            navigate("login");
        }).catch((error) => {
            console.error("Sign out error:", error);
        });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
                    <div className="mt-2">
                        <a className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline" role="button">
                            <span className="fs-4">Employee Management Dashboard</span>
                        </a>
                        <hr className="text-white d-none d-sm-block" />
                        <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
                            {authenticated && (
                                <li className="nav-item my-1 py-2 py-sm-0">
                                    <Link to="/EmployeeCard" className="nav-link text-white text-center text-sm-start" aria-current="page">
                                        <i className="bi bi-speedometer2"></i>
                                        <span className="ms-2 d-none d-sm-inline">Employee Card</span>
                                    </Link>
                                </li>
                            )}
                            {authenticated && (
                                <li className="nav-item my-1 py-2 py-sm-0">
                                    <Link to="/AddEmployee" className="nav-link text-white text-center text-sm-start" aria-current="page">
                                        <i className="bi bi-person-plus"></i>
                                        <span className="ms-2 d-none d-sm-inline">Add Employee</span>
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item my-1 py-2 py-sm-0">
                                <Link to="/" className="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className="bi bi-house"></i>
                                    <span className="ms-2 d-none d-sm-inline">Home</span>
                                </Link>
                            </li>
                            {authenticated && (
                                <li className="nav-item my-1 py-2 py-sm-0">
                                    <Link to="/EditEmployee" className="nav-link text-white text-center text-sm-start" aria-current="page">
                                        <i className="bi bi-people"></i>
                                        <span className="ms-2 d-none d-sm-inline">Edit Employee</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="dropdown open">
                        <button
                            className="btn border-none dropdown-toggle text-white"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="bi bi-person fs-4"></i>
                            <span className="fs-5 ms-3 d-none d-sm-inline">{userProperties.displayName}</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            {authenticated ? (
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={logout}>Logout</Link>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="register">Register</Link>
                                    </li>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
