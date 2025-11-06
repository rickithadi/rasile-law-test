import React from 'react';
import { NavLink } from 'react-router-dom';

interface FooterProps {
  text: string;
  links: { text: string; href: string; internal: boolean }[];
  html: string;
}

const Footer: React.FC<FooterProps> = ({
  links,
  html,
}) => {
  return (
    <footer className="bg-brand-1 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-brand-2 mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-brand-2 transition-colors duration-300"
                >
                  {link.href.includes('tel:') && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  )}
                  {link.href.includes('mailto:') && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  )}
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-brand-2 mb-4">About Rasile Law</h3>
            <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          {/* Legal Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-brand-2 mb-4">Legal Services</h3>
            <nav className="flex flex-col gap-3">
              <NavLink
                to="/chapter-7"
                className="text-gray-300 hover:text-brand-2 transition-colors duration-300"
              >
                Chapter 7 Bankruptcy
              </NavLink>
              <NavLink
                to="/estate-planning"
                className="text-gray-300 hover:text-brand-2 transition-colors duration-300"
              >
                Estate Planning
              </NavLink>
              <NavLink
                to="/probate-administration"
                className="text-gray-300 hover:text-brand-2 transition-colors duration-300"
              >
                Probate Administration
              </NavLink>
              <NavLink
                to="/dissolution"
                className="text-gray-300 hover:text-brand-2 transition-colors duration-300"
              >
                Dissolution
              </NavLink>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-brand-2 mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-300 hover:text-brand-2 transition-colors duration-300 ${
                    isActive ? 'text-brand-2 font-semibold' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about-me"
                className={({ isActive }) =>
                  `text-gray-300 hover:text-brand-2 transition-colors duration-300 ${
                    isActive ? 'text-brand-2 font-semibold' : ''
                  }`
                }
              >
                About Me
              </NavLink>
              <a
                href="tel:3308237762"
                className="text-gray-300 hover:text-brand-2 transition-colors duration-300"
              >
                Schedule Consultation
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Rasile Law. All rights reserved.
            </div>
            <div className="text-gray-400 text-center md:text-right">
              Professional Legal Services | Working Remotely | Licensed Attorney
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;