import React from 'react';
import NavBar from '../components/navbar';

const PageLayout = ({ children }) => (
  <div>
    <NavBar />
    <div>{children}</div>
  </div>
);

export default PageLayout;
