import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="text-white" style={{backgroundColor: '#312032'}}>
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Pawfect Match</h3>
            <p className="text-gray-200">
              Helping families find their perfect canine companions through intelligent breed matching.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4" style={{color: '#F7BE89'}}>Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/breeds" className="text-gray-200 transition-colors hover:text-[#F7BE89]">
                  Breed Database
                </Link>
              </li>
              <li>
                <Link to="/care-guides" className="text-gray-200 transition-colors hover:text-[#F7BE89]">
                  Care Guides
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-200 transition-colors hover:text-[#F7BE89]">
                  Training Tips
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4 text-primary-200">Find Dogs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-200 hover:text-primary-200 transition-colors">
                  Local Breeders
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-200 hover:text-primary-200 transition-colors">
                  Rescue Organizations
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-200 hover:text-primary-200 transition-colors">
                  Adoption Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4 text-primary-200">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-200 hover:text-primary-200 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-200 hover:text-primary-200 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-200 hover:text-primary-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-200 hover:text-primary-200 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-200">
            © 2024 PawMatch. All rights reserved. Made with ❤️ for dog lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;