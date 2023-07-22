import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
           <p className="btn btn-ghost normal-case text-xl">Campus<span className='text-red-600'>Admit</span></p>
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} College Admission Website. All rights reserved.</p>
          <p>Address: 123 Main St, City, State, Zip</p>
          <p>Email: contact@example.com</p>
        </div>
      </footer>
    );
};

export default Footer;