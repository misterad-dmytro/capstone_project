import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "../css/slick-theme.css";
import axios from 'axios';
import "./mySlick.css";

class ImgSlider extends React.Component{
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
                axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/media`)
                .then( res => {
                    console.warn(res.data);
                    this.setState( {loading:false, media: res.data})
                })
                .catch( error => this.setState( {loading: false, error: error.response.data}))
            });
        }    
    render(){
        const { media } = this.state;
        const settings = {
            dot: true, 
            infinite: true, 
            speed:500, 
            slidesToShow:3,
            slidesToScroll: 1,
            cssEase: "linear"
        }
        return(

            <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src="http://151.106.108.53/wp-content/uploads/2021/03/SAM_6575-scaled.jpg"  alt="" class="slider-image"/>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-snapchat"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="details">
                    <h3>My Name<h4><span className="job-title">UI developer</span></h4></h3>
                    </div>
                </div>
                </div>
                <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src="http://151.106.108.53/wp-content/uploads/2021/04/patrick-tomasso-YKnPN4j8SE8-unsplash.jpg"  alt="" class="slider-image"/>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-snapchat"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="details">
                    <h3>My Name<h4><span className="job-title">UI developer</span></h4></h3>
                    </div>
                </div>
                </div>
                <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src="http://151.106.108.53/wp-content/uploads/2021/04/jakob-owens-SiniLJkXhMc-unsplash-scaled.jpg"  alt="" class="slider-image"/>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-snapchat"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="details">
                    <h3>My Name<h4><span className="job-title">UI developer</span></h4></h3>
                    </div>
                </div>
                </div>
                <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src="http://151.106.108.53/wp-content/uploads/2021/04/4-scaled.jpg"  alt="" class="slider-image"/>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-snapchat"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="details">
                    <h3>My Name<h4><span className="job-title">UI developer</span></h4></h3>
                    </div>
                </div>
                </div>
                </Slider>
        )
    }
}

export default ImgSlider;