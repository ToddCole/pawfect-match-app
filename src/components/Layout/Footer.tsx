import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-title">Pawfect Match</h3>
          <p className="footer-description">
            Helping families find their perfect canine companions through intelligent breed matching.
          </p>
        </div>
        
        <div className="footer-columns">
          <div>
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/breeds" className="footer-link">
                  Breed Database
                </Link>
              </li>
              <li>
                <Link to="/care-guides" className="footer-link">
                  Care Guides
                </Link>
              </li>
              <li>
                <Link to="/training-tips" className="footer-link">
                  Training Tips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-column-title">Find Dogs</h4>
            <ul className="footer-links">
              <li>
                <Link to="#" className="footer-link">
                  Local Breeders
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Rescue Organizations
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Adoption Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-column-title">Support</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2024 PawMatch. All rights reserved. Made with ❤️ for dog lovers everywhere.
        </p>
      </div>
    </footer>
  );
};

export default Footer;