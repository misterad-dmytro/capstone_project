import React from 'react';
import  { Link }  from "@reach/router";
import logo from './images/logo.jpg';


class Navbar extends React.Component {

    constructor( props ) {
        super(props);
        
        this.state = { isActive: false };

        
	}

    handleLogout = ()=>{
        localStorage.clear()
    }
    
    isLoggedIn = () => {
        return localStorage.getItem('token');
    }

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
      };
    

    render() {
        
        const userName = localStorage.getItem('userName');
        return(
            <div>
                <header>
                <div className="header-inner">
                    
                    <div className="logo-holder">
                    <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                        <div className="nav-button-holder" onClick={this.handleToggle}>
                        <div className="nav-button vis-m"><span></span><span></span><span></span></div>
                    </div>
                    
                    <div className={this.state.isActive ? "nav-holder open" : "nav-holder"} >
                        <nav>
                            <ul>
                                <li><Link to="/Dashboard/${user}">Home</Link></li>
                                <li><Link to="/About">About us</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/Blog">Blog</Link></li>
                                <li><Link to="/Booking">Bookings</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>

                                {this.isLoggedIn()? (
                                    <React.Fragment>     
                                    <li><Link to="/">{userName}</Link>
                                        <ul>
                                        <li>
                                            <Link to="/" onClick={this.handleLogout}>Logout</Link>
                                        </li>
                                        </ul>
                                    </li>   
                                    </React.Fragment>
                                ):(
                                    <li><Link to="/Login">Login / Sign Up</Link></li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </header>
            </div>
        )
    }
}

export default Navbar;