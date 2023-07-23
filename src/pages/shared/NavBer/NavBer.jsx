import React from 'react';
import { Link } from 'react-router-dom';

const NavBer = () => {
    const navList = <>
        <li> <Link to="/">Home</Link></li>
        <li> <Link>College</Link></li>
        <li> <Link>Admission</Link></li>
        <li> <Link>My College</Link></li>
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-white text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-xl">Campus<span className='text-red-600'>Admit</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBer;