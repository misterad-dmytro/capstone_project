import React from 'react';
import Navbar from "../Navbar";
import axios from 'axios';
import Footer from "../Footer";
import Contact from "../Contact";
import { Router, Link } from "@reach/router";
import './home.css';
//import '../css/style.css';
import seperator from '../images/separator.png';

class Home extends React.Component {
   
constructor(props){
    super(props);

    this.state = {
        loading: false,
        media: [],
        error: ''
        }
    }

componentDidMount(){
    const wordPressSiteUrl = "http://151.106.108.53/";
    this.setState( {loading:true }, ()=>{
        axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/media?per_page=100`)
        .then( res => {
            console.warn(res.data);
            this.setState( {loading:false, media: res.data})
        })
        .catch( error => this.setState( {loading: false, error: error.response.data}))
    });
}

    render(){
        const userName = localStorage.getItem('userName');
        const { media } = this.state;
        return(
            <div id="main">
                <Navbar></Navbar>
                <div id="wrapper">
            <div className="content-holder elem scale-bg2 transition3">
                	
                <div className="fixed-title"><span>Home</span></div>

                            <section className="parallax-section" id="sec1">
                            <div className="overlay"></div>
                            <div className="bg">
                            <div className="slide-container">
                                {media.length  ?( 
                <div class="image-container-left">
                    { media.map(img => (
                        <div key={img.id}>
                            <img src={img.source_url}  alt={img.title.rendered} class="slider-image-left" />              
                        </div>
                    ))}
                </div>
                    ) : ''}
                        </div>
                        <div className="slide-container">
                                {media.length  ?( 
                <div class="image-container-right">
                    { media.map(img => (
                        <div key={img.id}>
                            <img src={img.source_url}  alt={img.title.rendered} class="slider-image-right" />              
                        </div>
                    ))}
                </div>
                    ) : ''}
                        </div>
                            </div>
                            <div className="container">
                                <h2>Tasveer</h2><br/>
                                <div className="separator-image"><img src={seperator} alt="" /></div><br/>
                                <span className="subtitle"> Hi {userName}! Welcome to Tasveer! A journey through my eyes...</span><br/><br/>
                                    <span className="subtitle"><Link to="/portfolio" className="subtitle">Enter</Link></span>
                            </div>
                            <a className="custom-scroll-link sect-scroll" href="#sec2"><i className="fa fa-angle-double-down"></i></a>
                        </section>
                    </div> 
            </div>
            <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
            <Footer></Footer>
            </div>
            
        )
    }
}

export default Home;