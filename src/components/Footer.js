import React from 'react';

class Footer extends React.Component {
    render(){
        return(
                <footer>
                <div className="policy-box">
    <span>&#169; tasveer 2021 . All rights reserved. </span> 
    <ul>
        <li><a href="#">ishpreetbedi@tasveer.com</a></li>
        <li><a href="#">+1 6547456789</a></li>
    </ul>
</div>
<div className="footer-social">
    <ul>
        <li><a href="https://www.facebook.com/ish1993" target="_blank" ><i className="fa fa-facebook"></i></a></li>
        <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/shpree_02/" target="_blank" ><i className="fa fa-instagram"></i></a></li>
        <li><a href="#" target="_blank" ><i className="fa fa-pinterest"></i></a></li>
        <li><a href="#" target="_blank" ><i className="fa fa-tumblr"></i></a></li>
    </ul>
</div>
            </footer>
        )
    }
}

export default Footer;