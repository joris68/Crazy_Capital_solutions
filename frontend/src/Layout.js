import React from 'react';
import { Outlet } from 'react-router-dom';
import { FooterBar} from './components/Footer';
import { HeaderBar } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Layout({children}) {
  return (
    <div>
      <header>
        <HeaderBar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <FooterBar/>
      </footer>
    </div>
  );
}