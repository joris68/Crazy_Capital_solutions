

import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBar from './Home/HeaderBar';
i

export default function App() {
  return (
    <div>
      <HeaderBar />
      <Outlet />
      <FooterBar />
    </div>
  );
}