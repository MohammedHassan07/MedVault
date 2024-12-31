import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BtnTask from '../Components/BtnTask';

const HomePage = () => {

    return (
        <>
            <div className="container rounded-bottom d-flex justify-content-center flex-wrap">

                <BtnTask taskName={'Add Medicine'} path={'/add-medicine'} />

                <BtnTask taskName={'Add Agency'} path={'/add-agency'} />

                <BtnTask taskName={'Add Storage'} path={'/add-storage'} />

                <BtnTask taskName={'Add content'} path={'/add-content'} />

            </div>

            <div className='container'>
                <Outlet />
            </div>
        </>
    );
};

export default HomePage;
