import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Chapter7: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-brand-1 mb-8 text-center">Chapter 7 Bankruptcy</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-brand-2 text-brand-1 p-6 rounded-lg mb-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Say Goodbye to Debt!</h2>
                <p className="text-lg">Get the fresh start you deserve with Chapter 7 bankruptcy protection</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-1 mb-4">What is Chapter 7?</h3>
                  <p className="text-gray-700 mb-4">
                    Chapter 7 bankruptcy is designed to give you a fresh financial start by eliminating most of your debts. 
                    It's often called "liquidation bankruptcy" because it can involve selling assets to pay creditors, 
                    but many people keep all or most of their property.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-brand-1 mb-4">Benefits of Chapter 7</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Eliminate most unsecured debts</li>
                    <li>Stop creditor harassment</li>
                    <li>Keep essential property</li>
                    <li>Fresh financial start</li>
                    <li>Usually completed in 3-4 months</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-brand-1 mb-4">Get Professional Help</h3>
                  <p className="text-gray-700 mb-4">
                    I am working remotely and only meeting in person when necessary. Give me a call or send me an e-mail 
                    and we can talk about your situation.
                  </p>
                  
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-brand-1 mb-3">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-brand-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <a href="tel:3308237762" className="text-brand-1 hover:text-blue-700 font-medium">
                          (330) 823-7762
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-brand-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <a href="mailto:crasile@gmail.com" className="text-brand-1 hover:text-blue-700 font-medium">
                          crasile@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mt-4 italic">
                    Thanks for coming and I hope to hear from you!
                  </p>
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

export default Chapter7;