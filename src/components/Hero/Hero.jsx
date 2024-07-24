import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Resume from '../../assets/Resume.pdf';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-img'>
                <img src={profile_img} alt="" />
            </div>
            <h1><span>I'm Yogeshwar Singh,</span> MERN developer based in India.</h1>
            <p>
                I am a MERN developer from Delhi, India, eager to start my career and gain experience in a dynamic and innovative company.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
             <a href={Resume}  className="hero-resume">My resume</a>
            </div>
        </div>
    )
}

export default Hero