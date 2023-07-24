import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBer from '../pages/shared/NavBer/NavBer';
import Footer from '../pages/shared/Footer/Footer';

const Layout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('register') || location.pathname.includes('login')
    return (
        <div>
            { isLogin || <NavBer></NavBer>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Layout;