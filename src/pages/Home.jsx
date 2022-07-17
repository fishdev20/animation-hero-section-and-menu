import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import arrow from './images/arrow-right.svg'
import "./home.scss";
import { Grid } from '@mui/material';



const Home = ({active, mode}) => {
    let app = useRef(null)
    let images = useRef(null)
    let content = useRef(null)
    let tl = gsap.timeline()
  useEffect(() => {
   
    // Images Vars
    const girlImage = images.current.firstElementChild;
    const boyImage = images.current.lastElementChild;
    
    //content vars
    // const headlineFirst = content.current.children[0].children[0];
    // const headlineSecond = headlineFirst.nextSibling;
    // const headlineThird = headlineSecond.nextSibling;
    const contentP = content.current.children[1];
    const contentButton = content.current.children[2];
    

    //Image animation
    gsap.to(app.current, {duration: 0.5, autoAlpha: 1, delay: 0});
      gsap.to(boyImage,{duration: 3, y: -120, opacity: 1})
      gsap.to(boyImage.firstElementChild, {duration: 3,scale: 1.5,autoAlpha: 1, ease: "power3.easeOut"})
      gsap.to(girlImage,{duration: 3, y: 50, opacity: 1})
      gsap.to(girlImage.firstElementChild,{duration: 3,scale: 1.5, ease: "power3.easeOut"})

    tl.to('.hero-content-line', {
        'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
        opacity: 1,
        y: 0, 
        duration: 1
    })
    tl.to( contentP, {
        'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
        opacity: 1,
        y: 0, 
        duration: 1
    });
    tl.to( contentButton, {
        y: -20,
        ease:'power3.easeOut',
        opacity: 1,
        
    });
    
  }, [tl])
    return ( 
        <div className='hero'  ref={app} >
            <div className={`container ${active ? 'blur' : ''} ${mode ? 'light' : ''}`}>
                <section>
                    <Grid container className="hero-inner">
                        <Grid item xs={12} md={6} className="hero-content">
                            <div 
                            className="hero-content-inner" 
                            ref={content}
                            >
                                <h1>
                                    <div className="hero-content-line">
                                        Lorem ipsum dolor 
                                    </div>
                                    <div className="hero-content-line">
                                        sit amet, consectetur 
                                    </div>
                                    
                                    <div className="hero-content-line">
                                        adipiscing elit.
                                    </div>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                                </p>
                                <div className="btn-row">
                                    <button className={`explore-button ${mode ? 'buttonLight' : 'buttonDark'}`}>Explore
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="row"/>
                                    </div>
                                    </button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className="hero-images">
                            <div ref={images}  className="hero-images-inner">
                                <div className="hero-image girl">
                                <img src={'https://i.scdn.co/image/0fd7290b2c86a2d452eae43ae964806298e7c6c3'} alt="boy" />
                                </div>
                                {/* <div className="hero-image boy">
                                    <img src={imgBoy} alt="boy" />
                                </div> */}
                                <div className="hero-image boy">
                                    <img src={'https://i.scdn.co/image/0fd7290b2c86a2d452eae43ae964806298e7c6c3'} alt="boy" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>  
                </section>
                <section>
                    <div>Test</div>
                </section>
                <section>
                    <div>Test</div>
                </section>
                <section>
                    <div>Test</div>
                </section>
                
            </div>       
        </div>
        
        
        
    )
}

export default Home