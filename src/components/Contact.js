import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "@reach/router";
import img1 from './images/contact/3.jpg'
import img2 from './images/contact/4.jpg'
import './css/yourstyle.css';
import './css/style.css';
import seperator from './images/separator.png';

class Contact extends React.Component {
    render(){
        
        return(
            <div className="main">
                <Navbar></Navbar>
            <div className="wrapper">
            <div className="content-holder elem scale-bg2 transition3">
                
                <div className="fixed-title"><span>Contact</span></div>
                
                <div className="scroll-page-nav">
                    <ul>
                        <li><a href="#sec1"></a></li>
                        <li><a href="#sec2"></a></li>
                        <li><a href="#sec3"></a></li>
                    </ul>
                </div>

                        <section className="parallax-section" id="sec1">
                            <div className="overlay"></div>
                            <div className="bg"><img src="http://151.106.108.53/wp-content/uploads/2021/03/MG_7556-scaled.jpg"></img></div>
                            <div className="container">
                                <h2>Contact Us</h2>
                                <div className="separator-image"><img src={seperator} alt="" /></div><br/>
                                <h3 className="subtitle">"We are here to help you.." </h3>
                            </div>
                            <a className="custom-scroll-link sect-scroll" href="#sec2"><i className="fa fa-angle-double-down"></i></a>
                        </section>

                        <section className="section-columns" id="sec2">
                            <div className="section-columns-img">
                                {/*<div className="bg" style={{backgroundImage:"url(" + img2 + ")"}}></div>*/}
                            <div className="bg"><img src="http://151.106.108.53/wp-content/uploads/2021/04/4-scaled.jpg"></img></div>
                            
                            </div>
                            <div className="section-columns-text">
                                <div className="custom-inner">
                                    <div className="new">
                                        <h2>Contact Us</h2>
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
                    
                    <section className="no-padding">
                        <div className="content">
                            <div className="inline-facts-holder">
                                <div className="inline-facts">
                                    <h6><a href="#">Facebook</a></h6>
                                </div>
                                <div className="inline-facts">
                                    <h6><a href="#">Twitter</a></h6>
                                </div>
                                <div className="inline-facts">
                                    <h6><a href="#">Instagram</a></h6>
                                </div>
                                <div className="inline-facts">
                                    <h6><a href="#">Pinterest</a></h6>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    
                    <section className="flat-form" id="sec3">
                        <div className="container">
                            <h2>Write us</h2>
                            <div className="separator-image"><img src="images/separator2.png" alt=""/></div>
                            <div id="contact-form">
                                <div id="message"></div>
                                <form method="post" action="php/contact.php" name="contactform" id="contactform">
                                    <input name="name" type="text" id="name" className="inputForm2" onClick="this.select()" value="Name"/>
                                    <input name="email" type="text" id="email" onClick="this.select()" value="E-mail"/>
                                    <textarea name="comments" id="comments" onClick="this.select()">Message</textarea>
                                    <input type="submit" className="send_message transition" id="submit" value="Send Message" />
                                </form>
                            </div>
                        </div>
                        </section>
                        <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
                </div>
                
                <Footer></Footer>
                </div>
            </div>
            
        );
    }
}

export default Contact;