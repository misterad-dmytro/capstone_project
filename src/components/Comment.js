import React from 'react';
import axios from 'axios';
import renderHtml from 'react-render-html';

class Comment extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            comments: [],
            error: '',
            author_name: '',
            content: '',
            postCreated: false, 
            userEmail: '',
            //post: {}
            }
        }
        
        componentDidMount(){
            const wordPressSiteUrl = "http://151.106.108.53/";
            this.setState( {loading:true }, ()=>{
                axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/comments`)
                .then( res => {
                    console.warn(res.data);
                    this.setState( {loading:false, comments: res.data})
                })
                .catch( error => this.setState( {loading: false, error: error.response.data}))
            });

        }

     handleSubmit = (event) => {
        event.preventDefault();
        //alert('You have submitted the form.')
        const formData = {
            author_name: this.state.author_name,
            content : this.state.content,
            userEmail : this.state.userEmail,
            post : this.state.post,
            status: 'publish'
        }
        const authToken = localStorage.getItem('token');
        //const userName = localStorage.getItem('username');
        const wordPressSiteUrl = "http://151.106.108.53/";
        axios.post(`${wordPressSiteUrl}/wp-json/wp/v2/comments`, formData, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${authToken}`
                
            }
        })
        .then(res => {
            console.warn('res',res);
            this.setState({
                loading: false,
                postCreated: !! res.data.id, 
                message: res.data.id ? 'Comment Posted' : ''
            })
        })
        .catch (err=>{{
            this.setState( {message: err.response.data.message})
        }})
      }

      handleOnChange = (event) =>{
        this.setState( { [event.target.name]: event.target.value});
      }
    render(){
        const {comments, message, postCreated, author_name, content, userEmail} = this.state; 
        console.warn('state', this.state);
        return(
                <comment>
                        <div class="comments-holder">
                                            <h3>Comments <span>(3)</span></h3>
                                            <ul class="commentlist clearafix">
                                            {comments.length  ?(  
                                                <li class="comment">
                                                { comments.map(comment => (
                                
                                            <div key={comment.id}>
                                                    <div class="comment-body">
                                                        
                                                        <div class="comment-author">
                                                            {/*<img alt='' src='images/blog/users/1.jpg' width="50" height="50"/>*/}
                                                            <i class="fa fa-user fa-3x"></i>
                                                        </div>
                                                        <cite class="fn"><a href="#">{comment.author_name}</a></cite>
                                                        <div class="comment-meta">
                                                            <h6><a href="#">{comment.date}</a> / <a class='comment-reply-link' href="#comment-section">Reply</a></h6>
                                                        </div>
                                                        <p>{renderHtml(comment.content.rendered)}</p>
                                                    </div>
                                                
                                                    </div>
                                                     ))}
                                                </li>
                                                 ) : ''}
                                
                                            </ul>
                                        </div>
                                        
                                        <div class="comment-form-holder" id="comment-section">
                                            <h3>Leave A Comment</h3>
                                            <div id="respond" class="clearafix">
                                                <div class="comment-reply-form">
                                                    <form onSubmit={this.handleSubmit } id="commentform" class="form-horizontal" name="commentform">
                                                    { message ? <div className={`alert ${postCreated ? 'alert-success':'alert-danger'}`}>{message}</div> : ''}
                                                        <div class="comment-form-author control-group">
                                                            <div class="controls">
                                                                <input id="author_name" name="author_name" type="text" onChange={this.handleOnChange} size="40" aria-required="true" />
                                                            </div>
                                                            <label class="control-label" for="author_name">Name </label>
                                                        </div>
                                                        
                                                        <div class="comment-form-email control-group">
                                                            <div class="controls">
                                                                <input id="email" name="email" type="text" onChange={this.handleOnChange} size="40" aria-required="true" />
                                                            </div>
                                                            <label class="control-label" for="email">Email </label>
                                                        </div>
                                                        
                                                        <div class="comment-form-comment control-group">
                                                            <div class="controls">
                                                                <textarea id="content" name="content" onChange={this.handleOnChange} cols="50" rows="8" aria-required="true" placeholder="Your comment here..">
                                                                </textarea>
                                                            </div>
                                                        </div>
                                                        <div class="form-submit">
                                                            <div class="controls">
                                                                <button class="transition button" type="submit">Post Comment</button>
                                                                <input type='hidden' name='comment_post_ID' value='30' id='comment_post_ID'/> 
                                                                <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            
                                        </div>
                </comment>
        )
    }
}

export default Comment;