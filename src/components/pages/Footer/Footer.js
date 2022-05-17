import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <GiTeacher className='navbar-icon' />
                            Sunnah
                        </Link>
                    </div>
                    <small className='website-rights'>Sunnah © 2022</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;