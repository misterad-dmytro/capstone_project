import React from 'react';
import './DetailPage.css';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import { Router, Link } from "@reach/router";
import Navbar from '../Navbar';
import Footer from '../Footer';
class DetailPage extends React.Component {
constructor(props) {
    super(props);
    
    this.state = {
        showThumbnails: true,
        currentID: props.workId,
        currentPost: []
        
    };
}
    componentDidMount() {
        
        axios.get(`http://151.106.108.53/wp-json/wp/v2/portfolio/${this.state.currentID}`)
        .then(res => {
          const currentPost = res.data;
            this.setState({ currentPost: currentPost });
            

            console.log(this.state.currentPost)
         
            
        })
    
  
}


    render() {
        let current_datetime = new Date(this.state.currentPost.date);
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
        
        let newImage = this.state.currentPost.acf ? this.state.currentPost.acf.image_gallery.map(item => (
            {
            thumbnail: item.sizes.thumbnail,
              original: item.url
            } 
        )) : [];

    return (
        <div id="main">
            <Navbar></Navbar>
        <div id="wrapper">
            
                
                <div className="content-holder elem scale-bg2 transition3 slid-hol">
                
                    <div className="fixed-title"><span>{this.state.currentPost.title ? this.state.currentPost.title.rendered : 'Loading...'}</span></div>
                    
                   
                    <div className="content full-height">
                        
                        <div className="fixed-info-container">
                            <h3>{this.state.currentPost.title ? this.state.currentPost.title.rendered : 'Loading...'} </h3>
                            <div className="separator"></div>
                            <div className="clearfix"></div>
                            <p dangerouslySetInnerHTML={{ __html: this.state.currentPost.content ? this.state.currentPost.content.rendered : 'Loading...' }}></p>
                            <h4>Info</h4>
                            <ul className="project-details">
                                <li>
                                    <i className="fa fa-bicycle"></i>
                                    <div className="pd-holder">
                                        <h5>Category :  {this.state.currentPost.acf ? this.state.currentPost.acf.category : 'Loading...'}</h5>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-calendar"></i>
                                    <div className="pd-holder">
                                        <h5>Date :  {formatted_date}</h5>
                                    </div>
                                </li>
                                
                            </ul>
                            
                            <div className="content-nav">
                                
                            <div className="p-all">
                            
                            <Link to="/portfolio"><i className="fa fa-th-large"></i></Link>
        
                    
                                </div>
                            </div>
                        </div>                                     
                        <div className="resize-carousel-holder vis-info">
                           
                        <ImageGallery showThumbnails={this.state.showThumbnails} items={newImage} />
                            
                        </div>
                    </div>
                     
                    <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
                </div>
               
            </div>
            <Footer></Footer>
            </div>
        );
    }
}

export default DetailPage;