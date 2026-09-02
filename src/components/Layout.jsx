// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './Topbar'; 
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;