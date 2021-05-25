import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "@reach/router";
import img1 from '../images/contact/3.jpg'
import img2 from '../images/contact/4.jpg'
import axios from 'axios';
import renderHtml from 'react-render-html';
import Moment from 'react-moment';
import Comment from '../Comment'
import seperator from '../images/separator.png';
//import './css/yourstyle.css';

class Blog extends React.Component {
    
      constructor(props){
        super(props);

        this.state = {
            loading: false,
            posts: [],
            error: ''
            }
        }

    componentDidMount(){
        const wordPressSiteUrl = "http://151.106.108.53/";
        this.setState( {loading:true }, ()=>{
            axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts`)
            .then( res => {
                console.warn(res.data);
                this.setState( {loading:false, posts: res.data})
            })
            .catch( error => this.setState( {loading: false, error: error.response.data}))
        });
    }
    render(){
        //console.warn('state', this.state);
        const { posts } = this.state;
        return(
            
            <div id="main">
                <Navbar></Navbar>

                <div className="wrapper">
            <div className="content-holder elem scale-bg2 transition3">
              
            <div className="fixed-title"><span>Journal</span></div>
                    
                    <div className="content">

                        <section className="parallax-section">
                            <div className="overlay"></div>
                            <div className="bg"><img src="http://151.106.108.53/wp-content/uploads/2021/04/3-scaled.jpg"></img></div>
                            <div className="container">
                                <h2>Our Journal</h2>
                                <div className="separator-image"><img src={seperator} alt="" /></div><br/>
                                <h3 className="subtitle">Artists, Inspiration, Tips and Ideas</h3>
                            </div>
                            <a className="custom-scroll-link sect-scroll" href="#sec1"><i className="fa fa-angle-double-down"></i></a>
                        </section>

                        
                        <section id="sec1">
                            <div className="container column-container">
                                <div className="row">
                                    <div className="col-md-7">
                                    {posts.length  ?(      
                        <div id ="article">
                            { posts.map(post => (
                                
                                <div key={post.id}>
                                    <ul className="blog-title">
                                        
                                                <li><a href="#" className="tag"><Moment date={post.date}/></a></li>
                                    </ul>
                                    <div className="blog-media">
                                                <div className="box-item">
                                                    <a href="blog-single.html" >
                                                    <span className="overlay"></span>
                                                    <img src="images/bg/4.jpg"  alt="" className="respimg"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="blog-text">
                                                <h3>{post.title.rendered}</h3>
                                                <p>
                                                    {renderHtml(post.excerpt.rendered)}
                                                </p>
                                                <Link to={`/post/${post.id}`} className="ajax btn"><span>read more</span><i className="fa fa-long-arrow-right"></i></Link>
                                            </div>
                                </div>
                            ))}
                        </div>
                            ) : ''}

                                        <div className="clearfix"></div>
                                        
                                        <div className="pagination-blog">
                                            <a href="#" className="prevposts-link transition"><i className="fa fa-chevron-left"></i></a>
                                            <a href="#" className="blog-page transition">1</a>
                                            <a href="#" className="blog-page current-page transition">2</a>
                                            <a href="#" className="blog-page transition">3</a>
                                            <a href="#" className="blog-page transition">4</a>
                                            <a href="#" className="nextposts-link transition"><i className="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-4">
                                        <div className="sidebar">
                                            
                                            {/* 
                                            <div className="widget">
                                                <div className="searh-holder">
                                                    <form action="#" className="searh-inner">
                                                        <input name="se" id="se" type="text" className="search" placeholder="Search.." value="Search..." />
                                                        <button className="search-submit" id="submit_btn"><i className="fa fa-search transition"></i> </button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="widget">
                                                <h3>About Author</h3>
                                                <div className="clearfix"></div>
                                                <img src="images/bg/bedi.jpg" className="respimg waimg" alt=""/>
                                                <p>Ishpreet Bedi Ishpreet Bedi Ishpreet Bedi Ishpreet Bedi Ishpreet Bedi Ishpreet Bedi Ishpreet Bedi Ishpreet Bedi Ishpreet Bedi</p>
                                            </div>
                                            <div className="widget">
                                                <h3>Last posts</h3>
                                                <ul className="widget-posts">
                                                    <li className="clearfix">
                                                        <a href=""  className="widget-posts-img"><img src="images/bg/1.jpg" className="respimg" alt=""/></a>
                                                        <div className="widget-posts-descr">
                                                            <a href="#" title="">Vlog 1</a>
                                                            <span className="widget-posts-date"> 21 Mar 09.05 </span> 
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <a href=""  className="widget-posts-img"><img src="images/bg/1.jpg" className="respimg" alt=""/></a>
                                                        <div className="widget-posts-descr">
                                                            <a href="#" title=""> Vlog 2</a>
                                                            <span className="widget-posts-date"> 7 Mar 18.21 </span> 
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <a href=""  className="widget-posts-img"><img src="images/bg/1.jpg" className="respimg" alt=""/></a>
                                                        <div className="widget-posts-descr">
                                                            <a href="#" title="">Vlog 3</a>
                                                            <span className="widget-posts-date"> 7 Mar 16.42 </span>
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <a href=""  className="widget-posts-img"><img src="images/bg/1.jpg" className="respimg" alt=""/></a>
                                                        <div className="widget-posts-descr">
                                                            <a href="#" title="">Vlog 4</a>
                                                            <span className="widget-posts-date"> 2 Mar 14.42 </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget">
                                                <h3>Banner</h3>
                                                <div className="clearfix"></div>
                                                <img src="images/bg/banner_ad.jpg" alt="" className="respimg"/>
                                            </div>*/}
                                        </div>
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

export default Blog;

