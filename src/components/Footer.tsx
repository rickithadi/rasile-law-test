import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface FooterProps {
  text: string;
  links: { text: string; href: string; internal: boolean }[];
  html: string;
}

const Footer: React.FC<FooterProps> = ({
  text,
  links,
  html,
}) => {
  return (
    <footer className="bg-brand-1 text-white py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex flex-col gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-brand-3 hover:text-white transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">About</h3>
          <div className="text-brand-3" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Navigation</h3>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-brand-3 hover:text-white transition-colors duration-300 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-brand-3 hover:text-white transition-colors duration-300 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-brand-3 hover:text-white transition-colors duration-300 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-brand-3 hover:text-white transition-colors duration-300 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-brand-3">
        &copy; {new Date().getFullYear()} Legal Services. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;