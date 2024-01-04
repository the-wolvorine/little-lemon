import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import FooterImage from "../Assets/LogoFooter.png";
import { FaHouseDamage, FaPhone, FaMailBulk, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className='footer-col'>
            <h4>Navigation</h4>
            <ul className='footer-links'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/bookings'>Reservations</Link></li>
                <li><Link to='/orders'>Order Online</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
        <div className='footer-col'>
            <h4>Contact Us</h4>
            <address>
                <p><FaHouseDamage /> Chicago, Illinois, USA</p>
                <p><FaPhone /> 314-141-1414</p>
                <p><FaMailBulk /> hello@littlelemon.com</p>
            </address>
        </div>
        <div className='footer-col'>
            <h4>Social Media Links</h4>
            <ul className="social-links">
                <li>
                    <a href="/" target="blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    </li>
                    <li>
                    <a href="/" target="blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    </li>
                    <li>
                    <a href="/" target="blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </div>
      </div>
      <div className="footer-right">
        <img src={FooterImage} alt="FooterImage" />
      </div>
    </footer>
  );
};

export default Footer;
