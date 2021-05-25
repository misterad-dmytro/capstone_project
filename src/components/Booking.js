import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "@reach/router";
import img1 from './images/contact/3.jpg'
import img2 from './images/contact/4.jpg'
import './css/yourstyle.css';
import Moment from 'react-moment'
import axios from 'axios'

class Booking extends React.Component {
    
    
      constructor(props){
        super(props);

        this.state = {
            loading: false,
            bookings: [],
            error: '',
            //title:'',
            
              name:'',
              email:'',
              mobile:'',
              service:'',
              location:'',
              date: '',
            acf: [],
            //acf: true,
            //token: '',
            bookingCreated: false
            }
        }


        componentDidMount(){
          const wordPressSiteUrl = "http://151.106.108.53/";
          this.setState( {loading:true }, ()=>{
              axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/booking`)
              .then( res => {
                  console.warn(res.data);
                  this.setState( {loading:false, bookings: res.data})
              })
              .catch( error => this.setState( {loading: false, error: error.response.data}))
          });

          const token = localStorage.getItem ('token');
          this.setState({token});
      }

      handleOnChange=(event)=>{
        this.setState( { [event.target.name]: event.target.value});
      }

      handleSubmit = (event) => {
        event.preventDefault();
        //alert('You have submitted the form.')
        const formData = {
        //filterPortfolio = this.state.myPortfolio.filter(portfolio => portfolio.acf.category[0] == byOrigin)
        
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            service : this.state.service,
            location : this.state.location,
            //date: this.state.date,
            //acf : true,
            status: 'publish'
        }
        const authToken = localStorage.getItem('token');
        //const username = localStorage.getItem('username');
        const wordPressSiteUrl = "http://151.106.108.53/";
        axios.post(`${wordPressSiteUrl}/wp-json/wp/v2/booking`, formData, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${authToken}`  
            }
        })
        .then(res => {
            console.warn('res',res);
            this.setState({
                loading: false,
                bookingCreated: !! res.data.id, 
                message: res.data.id ? 'Booking Posted' : ''
            })
        })
        .catch (err=>{{
          console.warn( 'err', err.response.data);
            this.setState( {message: err.response.data.message})
        }})
        }

    render(){
      const { bookings, message, bookingCreated } = this.state;
      console.warn('state', this.state);
        return(
            
            <div className="main">
              <Navbar></Navbar> 
              <div className="wrapper">
            <div className="content-holder elem scale-bg2 transition3">
             
            <div className="fixed-title"><span>Bookings</span></div>
            <section className="flat-form" id="sec3">

            <div className="container column-container">
                                <div className="row">
                                    <div className="col-md-7">
                        {/* <div className="container">*/}
                            <h2>Book An Event</h2>
                            { message ? <div className={`alert ${bookingCreated ? 'alert-success':'alert-danger'}`}>{message}</div> : ''}
                            <div className="separator-image"><img src="images/separator2.png" alt=""/></div>
                            <div id="contact-form">
                          <div id="message"></div>
                          <form method="post" action="" name="contactform" id="contactform" onSubmit={this.handleSubmit}>
                            <input name="name" type="text" id="name" className="inputForm2" onChange={this.handleOnChange} placeholder="Name"/>
                            <input name="email" type="text" id="email" onChange={this.handleOnChange} placeholder="E-mail"/>
                        <input name="mobile" type="text" id="mobile" onChange={this.handleOnChange} placeholder="Mobile No." />
                        <select id="select_services" class="" name="select_service" placeholder="Select Sevice">
                          <option value="">Select Services :</option>
                          <option value="Wedding" class="attached enabled" name="service" onChange={this.handleOnChange}>Wedding Shoot</option>
                          <option value="Portrait" class="attached enabled" name="service" onChange={this.handleOnChange}>Portrait Shoot</option>
                          <option value="Landscape" class="attached enabled" name="service" onChange={this.handleOnChange}>Landscape Shoot</option>
                          <option value="Party" class="attached enabled" name="service" onChange={this.handleOnChange}>Party Shoot</option>
                          <option value="Other" class="attached enabled" name="service" onChange={this.handleOnChange}>Other</option>
                        </select>
                            <input name="location" type="text" id="location" onChange={this.handleOnChange} placeholder="Event Location"/>
                            <input type="date" id="eventdate" name="date" placeholder="eventdate" onChange={this.handleOnChange}/>
                            <input type="submit" className="send_message transition" id="submit" value="Confirm Booking" />
                          </form>
                      </div>
                        {/* </div>*/}

                        </div>

                        <div className="col-md-4">
                                        <div className="sidebar">
                                        {bookings.length  ?(      
                        <div id ="article">
                            { bookings.map(booking => (
                                
                                <div key={booking.id}>
                                    <ul className="blog-title">
                                      <li><a href="#" className="tag"> <Moment date={booking.date}/></a></li>
                                                
                                    </ul>
                              
                                    <div className="blog-text">

                                      <p>
                                        <b>{booking.title.rendered} :</b><br/>
                                      Name : {booking.acf.name}<br/>
                                      Service : {booking.acf.service}<br/>
                                      Date : {booking.acf.date}<br/>
                                      </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                            ) : ''}
                                        </div>
                                    </div> 



                        </div>
                        </div>
                    </section>
                    <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
            </div>
            </div>
            <Footer></Footer>
                
        </div>
        );
    }
}

export default Booking;

