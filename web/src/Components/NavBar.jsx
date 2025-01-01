import React from 'react';
import { Link } from 'react-router-dom';
import BtnTask from './BtnTask';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MedVault</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link active" to="/" aria-current="page">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add-medicine" aria-current="page">Add Medicine</Link>
                        </li>


                        <li className="nav-item dropdown">
                            <BtnTask
                                tasks={[
                                    { taskName: 'Add Agency', path: '/add-agency' },
                                    { taskName: 'Update Agency', path: '/update-agency' },
                                    { taskName: 'Delete Agency', path: '/delete-agency' },
                                ]}
                                taskName="Agency"
                            />
                        </li>

                        <li className="nav-item">
                            <BtnTask
                                tasks={[
                                    { taskName: 'Add Storage', path: '/add-storage' },
                                    { taskName: 'Update Storage', path: '/update-storage' },
                                    { taskName: 'Delete Storage', path: '/delete-storage' },
                                ]}
                                taskName={'Storage'}
                            />
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex ">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
