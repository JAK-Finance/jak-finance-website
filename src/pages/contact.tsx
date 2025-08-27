import React from 'react';
import Contact from '../components/Contact';
import { MenuItem } from '../components/types'; // Updated import path

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const ContactPage: React.FC = () => {
  return <Contact menuItems={menuItems} />;
};

export default ContactPage;
