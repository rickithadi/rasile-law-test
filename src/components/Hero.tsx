import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  heading: string;
  subheading: string;
  cta: { label: string; href: string }[];
  backgroundImage: string;
  fullText: string;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  cta,
  fullText,
}) => {
  return (
    <div className="relative bg-gradient-to-br from-brand-1 to-blue-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center text-white">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-medium text-brand-2 mb-4">
              {subheading}
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {heading}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8">
              {fullText}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cta.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="bg-brand-2 hover:bg-yellow-500 text-brand-1 font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:3308237762" 
              className="flex items-center gap-2 text-white hover:text-brand-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              (330) 823-7762
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="mailto:crasile@gmail.com" 
              className="flex items-center gap-2 text-white hover:text-brand-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              crasile@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;