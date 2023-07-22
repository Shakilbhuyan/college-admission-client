import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../pages/shared/NavBer/NavBer';

const Layout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;