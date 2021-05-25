import React from 'react';
import './CategoriesPage.css';
import axios from 'axios';
import { Router, Link } from "@reach/router";
import Navbar from '../Navbar';
import Footer from '../Footer';

class CategoriesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myPortfolio: [],
            filterPortfolio: [],
            photoCategories: []
        };
    }
    componentDidMount() {
        axios.get(`http://151.106.108.53/wp-json/wp/v2/portfolio/`)
        .then(res => {
          const myPortfolio = res.data;
            this.setState({ myPortfolio: myPortfolio });
            var dataArray = Object.keys(myPortfolio).map(val => myPortfolio[val].acf.category[0])
            const uniqueArray = Array.from(new Set(dataArray));
            
            this.setState({
                filterPortfolio: this.state.myPortfolio,
                photoCategories: uniqueArray
            })

            console.log(this.state.photoCategories)
        })
        
            
    };
    

        

        
 

    handleClick = event => {
        const byOrigin = event.target.getAttribute("data-value")
        var activItem = document.querySelector('.gallery-filter-active')
        activItem.classList.remove('gallery-filter-active')
        event.target.classList.toggle('gallery-filter-active')
        let filterPortfolio = []
        if(byOrigin === 'all'){
            filterPortfolio = this.state.myPortfolio
        } else{
            filterPortfolio = this.state.myPortfolio.filter(portfolio => portfolio.acf.category[0] == byOrigin)
         
        }
        
        this.setState({filterPortfolio: filterPortfolio})
    
    }
    
    render() {
        const renderAll = this.state.filterPortfolio.map(portfolio =>
           
            <div key={portfolio.title.rendered} className="gallery-item">
                                        <div className="grid-item-holder">
                                            <div className="box-item">
                                            <Link to={'/portfolio/' + portfolio.id} >
                                                    <span className="overlay"></span>
                                                    <img src={portfolio.acf.image_gallery[0].url} alt="" />
                                                </Link>
                                            </div>
                                            <div className="grid-item">
                                                <h3><a href={portfolio.href} className="ajax portfolio-link">{portfolio.title.rendered}</a></h3>
                                                <span>{portfolio.acf.category[0]}</span>
                                            </div>
                                        </div>
                                    </div>
        );
        return (
            <div id="main">
                <Navbar></Navbar>
            <div id="wrapper">
                    <div className="content-holder elem scale-bg2 transition3" >
            
                        <div className="fixed-title"><span>Portfolio</span></div>
            
                        <div className="count-folio">
                            <div className="num-album">{this.state.filterPortfolio.length}</div>
                    <div className="all-album">{this.state.myPortfolio.length}</div>
                        </div>
            
                        <div className="content">
                            <section>
                                <div className="container">
                        
                                    <h2>Our Portfolio</h2>
                       
                                    <div className="filter-holder inline-filters">
                                        <div className="gallery-filters">
                                            
                                    <a data-value='all' className="gallery-filter gallery-filter-active" onClick={this.handleClick}>All</a>
                                    {this.state.photoCategories.map((cat, i) => {     
                                     
                                    return (<a data-value={cat} className="gallery-filter" onClick={this.handleClick}>{cat}</a>) 
                                    })
                                    }
                                           
                                        </div>
                                    </div>
                        
                                </div>
                                <div className="gallery-items    grid-big-pad three-coulms   vis-port-info">
                        
                            
                                    
                            
                                    {renderAll}
                     
                                    
                       
                                </div>
                            </section>
                        </div>
               
                        <div className="share-container  isShare" data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
                    </div>
                </div>
                <Footer></Footer>
                </div>
        );
    }
}

export default CategoriesPage;