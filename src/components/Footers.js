import React from 'react';
import './Footer.css'; // import your custom stylesheet
import Base from './Base';
function Footers(){
  return (
    <footer className="oxford-footer">
      <div className="oxford-footer-content">
        <div className="oxford-footer-section">
          <h3 className="oxford-footer-heading">Contact us</h3>
          <ul className="oxford-footer-list">
            <li>
              <a href="tel:+441865270000">+91 (674) 3060509</a>
            </li>
            <li>
              <a href="mailto:admission@iiit-bh.ac.in"> info@iiit-bh.ac.in</a>
            </li>
          </ul>
        </div>
        <div className="oxford-footer-section">
          <h3 className="oxford-footer-heading">Follow us</h3>
          <ul className="oxford-footer-list">
            <li>
              <a href="https://twitter.com/IIIT_Bh">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/iiit.bhubaneswar/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/iiit_bh/?hl=en">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="oxford-footer-section">
          <h3 className="oxford-footer-heading">Legal</h3>
          <ul className="oxford-footer-list">
            {/* <li>
              <a href="https://www.ox.ac.uk/about/organisation/legal-notice">Legal notice</a>
            </li> */}
            <li>
              <a href="https://www.iiit-bh.ac.in/disclaimer">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="oxford-footer-bottom">
        <p>&copy; IIIT Bhubaneswar 2006 - 2020</p>
      </div>
    </footer>
    
  );
}

export default Footers;
