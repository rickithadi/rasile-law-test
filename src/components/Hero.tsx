import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  backgroundImage,
  fullText,
}) => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5">
            <NavLink to={subheading.slice(2, -3)} className="link link-hover">
              {subheading.slice(3, -4)}
            </NavLink>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            {cta.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="btn btn-primary btn-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;