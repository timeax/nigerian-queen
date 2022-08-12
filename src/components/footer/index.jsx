import React from 'react'
import Section from '../other/Section'
import logo from '../../assets/img/logo.png';
import obj from './assets/social';
import { IconButton, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <Section styleClass='footer'>
                <div className="d-flex footer-container">
                    <div className="footer-address">
                        <div className="d-flex flex-column">
                            <img src={logo} className='app-logo' alt="logo" />
                            <div className="d-flex social-media">
                                {obj.medias.map((media, i) => <span key={i}><IconButton href={media.route}>{media.icon}</IconButton></span>)}
                            </div>
                            <p>No 39 inesirm road, off Ada George road, 08039286380, 001 Entertainment 500001, Port Harcourt, Nigeria</p>
                            <span>info@tnq.ng</span>
                            <span>+234 704 823 4001</span>
                        </div>
                    </div>
                    <div className="quick-links">
                        <div className="d-flex table">
                            <div>
                                <h3>Our Company</h3>
                                <ul>
                                    {obj.quickLinks.about.map((item, i) => <li key={i}><Link to={item.route}>{item.name}</Link></li>)}
                                </ul>
                            </div>
                            <div>
                                <h3>Hot link</h3>
                                <ul>
                                    {obj.quickLinks.hotLinks.map((item, i) => <li key={i}><Link to={item.route}>{item.name}</Link></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='subscribe-section'>
                        <div className="d-flex">
                            <input type='email' />
                            <Button variant='contained' color='success'>Subscribe</Button>
                        </div>
                        <p>
                            Subscribe to our newsleter to get our latest updates & news in your mailbox!
                        </p>
                    </div>
                </div>
                <div className="d-flex">
                    <span className='ml-lg-auto'>The Nigerian Queen Limited Copyright © 2022. All rights reserved</span>
                </div>
            </Section>
        </footer>
    )
}

export default Footer