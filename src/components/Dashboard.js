
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
//import img1 from './images/contact/3.jpg'
import img1 from './images/home/home1.jpg'
import img2 from './images/home/home2.jpg'
import img3 from './images/home/home3.jpg'
import img4 from './images/home/home4.JPG'
import img5 from './images/home/home5.jpg'
import img6 from './images/home/home6.jpg'
import img7 from './images/home/home7.jpg'

class Dashboard extends React.Component {
    render(){
        const userName = localStorage.getItem('userName');
        return(
            <div className="content-holder elem scale-bg2 transition3">
                <Navbar></Navbar>
                {/*<!-- Fixed title  --> */}	
                <div className="fixed-title"><span>Home</span></div>
                    {/*<!-- Fixed title end --> */ }
                
                     {/*<!--=============== Content ===============--> */ }  
                    <div className="content full-height">
                        {/*<!-- Home wrapper --> */ } 
                        
                        <div className="full-height-wrap">
                             {/*  <!-- Hero title --> */}
                           
                            <div className="slide-title-holder">
                                <div className="slide-title">
                                    <span className="subtitle"> Hi {userName}! Welcome to Tasveer! A journey through my eyes...</span>
                                    <div className="separator-image"><img src="images/separator.png" alt="" /></div>
                                    <div className="hero-text-holder">
                                        <div className="hero-text owl-carousel">
                                            
                                             {/*<!--3  --> */ }
                                            <div className="item">Travel  photography</div>
                                             {/*<!-- 1 --> */ }
                                            <div className="item">Portraits  photography</div>
                                            {/*<!-- 2 --> */ }
                                            <div className="item">Landscapes photography </div>
                                        </div>
                                    </div>
                                    <h4><a  href="portfolio.html">Enter</a></h4>
                                </div>
                            </div>
                            {/*<!-- Hero title end  --> */ }
                            {/*<!-- 1 --> */ }
                            <div className="hero-grid">
                                <div className="overlay"></div>
                                <div className="hero-slider synkslider owl-carousel" data-attime="3220" data-rtlt="false">
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img1 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img2 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img3 + ")"}}></div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- 1 end --> */ }
                            {/*<!-- 2 --> */ }
                            <div className="hero-grid">
                                <div className="overlay"></div>
                                <div className="hero-slider owl-carousel" data-attime="3220" data-rtlt="false">
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img6 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img5 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img2 + ")"}}></div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- 2end --> */ }
                            {/*<!-- 3 --> */ }
                            <div className="hero-grid">
                                <div className="overlay"></div>
                                <div className="hero-slider owl-carousel"  data-attime="3220" data-rtlt="true">
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img6 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img7 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img6 + ")"}}></div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- 3end --> */ }
                            {/*<!-- 4 --> */ }
                            <div className="hero-grid">
                                <div className="overlay"></div>
                                <div className="hero-slider owl-carousel" data-attime="3220" data-rtlt="true">
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img2 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img6 + ")"}}></div>
                                    </div>
                                    <div className="item">
                                        <div className="bg" style={{backgroundImage:"url(" + img5 + ")"}}></div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- 4end --> */ }
                        </div>
                    </div>
                    {/*<!-- Share container  --> */ }    
                    <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Dashboard;