import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../css/yourstyle.css';
import '../css/style.css';
import './login.css';
import axios from 'axios';
import { Link , Redirect} from "@reach/router";

class Login extends React.Component {

    constructor( props ) {
        super(props); 
            this.state = {
                username: '',
                password: '',
                userNiceName: '',
                userEmail: '',
                loggedIn: false,
                loading: false,
                error: ''
            };
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        const siteUrl = "http://151.106.108.53"

        const loginData = {
            username: this.state.username,
            password: this.state.password
        }
        this.setState({loading: true}, () => {
            axios.post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
            .then( res=>{
                console.warn(res.data);
                if(undefined === res.data.token) {
                    this.setState( {error: res.data.message, loading: false});
                    return;
                }

                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userName', res.data.user_nicename);
                

                this.setState(
                    {
                        loading: false,
                        token: res.data.token,
                        userNiceName: res.data.user_nicename,
                        userEmail: res.data.user_email,
                        loggedIn: true
                    }
                )
            })
            .catch( err => {
                //console.warn(err.response.data);
                this.setState( { error: err.response.data, loading: false });
            })
        })
    };

    handleOnChange = (event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
        
        const { username, password, loggedIn, userNiceName } = this.state;

        const user = userNiceName ? userNiceName : localStorage.getItem ('userName');
        
        
        if(loggedIn || localStorage.getItem('token')){
            return <Redirect to={`/Dashboard/${user}`} noThrow/>

        }else{
            
            return(
                <div id="main">
                <Navbar></Navbar>
                <div id="wrapper">
                <div className="content-holder elem scale-bg2 transition3">
                
                    <div className="content full-height">
                    <div className="fixed-title"><span>Login</span></div>
                    <section className="parallax-section" id="sec1">
                            <div className="overlay"></div>
                            <div className="bg"><img src="http://151.106.108.53/wp-content/uploads/2021/04/martin-sattler-8peGuud5cEw-unsplash-scaled.jpg" className="bg-login"></img></div>
                            <div className="container">
                    <div class="login-box">
                    <h1>Login</h1>
                    <form onSubmit={this.onFormSubmit}>
                    <div class="textbox">
                        <i class="fa fa-user"></i>
                        <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleOnChange}/>
                    </div>

                    <div class="textbox">
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleOnChange}/>
                    </div>

                    <button type="submit" class="btn-login">Log In</button>
                    <div className="w-100 text-center mt-2">
                        Don't have an account? <span className="butt-link" ><Link to="/SignUp" style={{color: "white"}}>Sign Up</Link></span>
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
}

export default Login;