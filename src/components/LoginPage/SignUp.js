import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../css/yourstyle.css';
import '../css/style.css';
import axios from 'axios';
import { Link , Redirect} from "@reach/router";

//import 'cors';



class SignUp extends React.Component {

    constructor( props ) {
        super(props); 
            this.state = {
                username: '',
                password: '',
                userEmail: ''
            };
            this.handleOnChange = this.handleOnChange.bind(this);
            this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    getUser=()=>{
        axios.get('http://151.106.108.53/api/get_nonce/?controller=user&method=register')
        .then(res=>{
            console.log(res.data);
        }).catch(error =>{
            console.log(error.response)
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.getUser();
        
    };

    handleOnChange = (event)=>{
        //this.setState({[event.target.name]: event.target.value})
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]:value
        });
    }

    render(){

        const { username, password, userEmail } = this.state;

       // const user = userNiceName ? userNiceName : localStorage.getItem ('userName');

        /*
        if(loggedIn || localStorage.getItem('token')){
            return <Redirect to={`/Dashboard/${user}`} noThrow/>

        }else{*/
            
            return(
                <div id="main">
                <Navbar></Navbar>
                <div id="wrapper">
                <div className="content-holder elem scale-bg2 transition3">
                
                    <div className="content full-height">
                    <div className="fixed-title"><span>Sign Up</span></div>
                    <section className="parallax-section" id="sec1">
                            <div className="overlay" id="login-overlay"></div>
                            <div className="bg"><img src="http://151.106.108.53/wp-content/uploads/2021/04/martin-sattler-8peGuud5cEw-unsplash-scaled.jpg" className="bg-login"></img></div>
                            <div className="container">
                    <div class="login-box">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.onFormSubmit}>

                    <div class="textbox">
                    <i class="fa fa-envelope"></i>
                        <input type="text" placeholder="Email" name="email" value={this.state.userEmail} onChange={this.handleOnChange}/>
                    </div>

                    <div class="textbox">
                        <i class="fa fa-user"></i>
                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleOnChange}/>
                    </div>

                    <div class="textbox">
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                    </div>

                    <button type="submit" class="btn-login">Sign Up</button>
                    <div className="w-100 text-center mt-2">
                        Don't have an account? <span className="butt-link" ><Link to="/Login" style={{color: "white"}}>Login</Link></span>
                    </div>
                    </form>
                    </div>
                    </div>
                    </section>
                    </div>
                    </div>
                    </div>
                    <div className="share-container  isShare"  data-share="['facebook','pinterest','googleplus','twitter','linkedin']"></div>
                    <Footer></Footer>
                   
                    </div>
            );
        }
    }
//}

export default SignUp;