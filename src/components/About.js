import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "@reach/router";
import img1 from './images/contact/3.jpg'
import img2 from './images/contact/4.jpg'
import './css/yourstyle.css';
import './css/style.css';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "./css/slick-theme.css";
import ImgSlider from './Slider/slider';
import Slider from 'react-slick';
import seperator from './images/separator.png';

class About extends React.Component {


    render(){
        
        return(
            <div className="main">
                <Navbar></Navbar>
            <div className="wrapper">
            <div className="content-holder elem scale-bg2 transition3">
                
                <div className="content full-height">
                        
                        <div className="fixed-title"><span>About Us</span></div>
                        
                        <div className="scroll-page-nav">
                            <ul>
                                <li><a  href="#sec1"></a></li>
                                <li><a  href="#sec2"></a></li>
                                <li><a  href="#sec3"></a></li>
                            </ul>
                        </div>
                        
                        <section className="parallax-section" id="sec1">
                            <div className="overlay"></div>
                            <div className="bg"><img src="http://151.106.108.53/wp-content/uploads/2021/04/ethan-hoover-eIVJAkj1uCs-unsplash-scaled.jpg"></img></div>
                            <div className="container">
                                <h2>About Us</h2>
                                <div className="separator-image"><img src={seperator} alt="" /></div><br/>
                                <h3 className="subtitle">"Every picture has a story to tell..." </h3>
                            </div>
                            <a className="custom-scroll-link sect-scroll" href="#sec2"><i className="fa fa-angle-double-down"></i></a>
                        </section>
                        <section id="sec2">
                            <div className="container">
                            <ImgSlider></ImgSlider>
                            </div>
                        </section>
                        <section className="section-columns" id="sec3">
                            <div className="section-columns-img">
                                {/*<div className="bg" style={{backgroundImage:"url(" + img2 + ")"}}></div>*/}
                            <div className="bg"><img src="http://151.106.108.53/wp-content/uploads/2021/04/4-scaled.jpg"></img></div>
                            
                            </div>
                            <div className="section-columns-text">
                                <div className="custom-inner">
                                    <div className="new">
                                        <h2>About Us</h2>
                                        <div className="separator"></div>
                                        <div className="clearfix"></div>
                                        <h3 className="subtitle">Look even slightly believable. If you are going to use a passage.</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        <p>Integer sed tincidunt dui. Cras tincidunt at risus vitae ultrices. Sed at placerat diam. Nam ornare feugiat blandit. Suspendisse potenti. Nam et finibus elit. Integer ac turpis quam. Pellentesque eleifend ipsum a magna rhoncus, eu laoreet ipsum dapibus. Curabitur ac nisl molestie, facilisis nibh ac, facilisis ligula. Integer congue malesuada eros congue varius. Sed malesuada dolor eget velit euismod pretium.</p>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    

                        
                       
                    </div>
                    <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
                </div>
                </div>
                <Footer></Footer>
                
            </div>
            
        );
    }
}

export default About;