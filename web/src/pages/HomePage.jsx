import React from 'react';
import { Outlet } from 'react-router-dom';
import BtnTask from '../Components/BtnTask';

const HomePage = () => {
    return (
        <>
        {/* <div>Home Page</div> */}
            {/* Outlet for Nested Routes */}
            <div className="container">
                <Outlet />
            </div>
        </>
    );
};

export default HomePage;
