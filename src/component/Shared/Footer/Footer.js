import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>Blood Bank</h4>
                        <ul>
                            <li><Link to="/#">about us</Link></li>
                            <li><Link to="/#">our services</Link></li>
                            <li><Link to="/#">privacy policy</Link></li>
                            <li><Link to="/#">join us</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="/#">FAQ</Link></li>
                            <li><Link to="/#">contact</Link></li>
                            <li><Link to="/#">query</Link></li>
                            <li><Link to="/#">availablity</Link></li>

                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Donate Blood</h4>
                        <ul>
                            <li><Link to="/#">Register</Link></li>
                            <li><Link to="/#">get blood</Link></li>
                            <li><Link to="/#">be a donor</Link></li>
                            <li><Link to="/#">donate money</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <Link to="/#"><i class="fab fa-facebook-f"></i></Link>
                            <Link to="/#"><i class="fab fa-twitter"></i></Link>
                            <Link to="/#"><i class="fab fa-instagram"></i></Link>
                            <Link to="/#"><i class="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;