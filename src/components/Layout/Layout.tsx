import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavigationProps } from '../../types';

interface LayoutProps extends NavigationProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, isAuthenticated, user }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} user={user} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;