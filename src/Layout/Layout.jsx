import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../pages/shared/NavBer/NavBer';
import Footer from '../pages/shared/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;