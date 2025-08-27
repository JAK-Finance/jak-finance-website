import React from 'react';
import Team from '../components/Team';
import { MenuItem } from '../components/types'; // Updated import path

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const TeamPage: React.FC = () => {
  return <Team menuItems={menuItems} />;
};

export default TeamPage;
