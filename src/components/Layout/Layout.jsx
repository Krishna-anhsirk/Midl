import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, tab }) => {
  return (
    <div>
      <Navbar tab={tab} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
