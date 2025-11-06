import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about-me' },
    { label: 'Chapter 7', href: '/chapter-7' },
    { label: 'Probate Administration', href: '/probate-administration' },
    { label: 'Estate Planning', href: '/estate-planning' },
    { label: 'Dissolution', href: '/dissolution' }
  ];

  return (
    <nav className="bg-brand-1 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              Rasile Law
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'bg-brand-2 text-brand-1'
                    : 'text-white hover:bg-blue-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-brand-2 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;