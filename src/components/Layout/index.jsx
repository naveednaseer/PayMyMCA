import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Footer from '../Footer';

// import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
      <div>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
  );
}

// Layout.propTypes = {
//   children: PropTypes.node
// };