import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutMe: React.FC = () => {
  const footerProps = {
    text: "Rasile Law - Professional Legal Services",
    links: [
      { text: "(330) 823-7762", href: "tel:3308237762", internal: false },
      { text: "crasile@gmail.com", href: "mailto:crasile@gmail.com", internal: false }
    ],
    html: "<p>Cheryl Lynn Rasile provides expert legal services in Chapter 7 Bankruptcy, Estate Planning, Probate Administration, and Dissolution.</p>"
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold text-brand-1 mb-8 text-center">About Me</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-brand-1 mb-4">Cheryl Lynn Rasile</h2>
                <p className="text-lg text-gray-700">
                  Professional Legal Services
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    I am working remotely and only meeting in person when necessary. Give me a call or send me an e-mail and we can talk about your situation.
                  </p>
                  
                  <p className="text-gray-700 mb-6">
                    Thanks for coming and I hope to hear from you!
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-brand-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      <a href="tel:3308237762" className="text-brand-1 hover:text-blue-700">
                        (330) 823-7762
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-brand-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <a href="mailto:crasile@gmail.com" className="text-brand-1 hover:text-blue-700">
                        crasile@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-brand-1 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Practice Areas</h3>
                    <ul className="space-y-2">
                      <li>Chapter 7 Bankruptcy</li>
                      <li>Estate Planning</li>
                      <li>Probate Administration</li>
                      <li>Dissolution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...footerProps} />
    </div>
  );
};

export default AboutMe;