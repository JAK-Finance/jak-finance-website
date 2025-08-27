import React from 'react';
import About from '../components/About';
import { MenuItem } from '../components/types'; // Updated import path

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const AboutPage: React.FC = () => {
  return <About menuItems={menuItems} />;
};

export default AboutPage;
