import React, {Component} from "react";
import Posts from "./Posts/Posts.js";
import PostForm from './PostForm';
import axios from 'axios';

class Home extends Component {
    constructor(){
        super();
        this.state={
            posts: []
        }
    
        this.updateState=this.updateState.bind(this);
        this.deletePost=this.deletePost.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8080/posts')
            .then(res=>{
                const posts = res.data;
                this.setState({posts});
            })
    }

    updateState(id, title, content){
        this.setState(prevState =>({
            posts: [...prevState.posts, {
                "id": id,
                "title": title,
                "content": content
            }]
        }))
    }

    deletePost(id){
        axios.post('http://localhost:8080/deletepost', this.state.posts.find(post => post.id == id)).then(this.setState({
            posts: this.state.posts.filter(post => post.id != id)
        }));
    }

    render() {
        return (
            < div >
                < h2 > Welcome </h2>
                < p >
                This is a simple front-end interface to demo a single-page application in React. Starter code found <a href="https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm" > here. </a>    
                </p>
                {/* <ul >
                    {this.state.posts.map(post => <Post id={post.title} title={post.title} content={post.content}></Post>)} 
                </ul> */}
                <Posts posts={this.state.posts} 
                    deletePost={this.deletePost}
                    ></Posts>
                <div>
                <PostForm updateState={this.updateState}></PostForm>
                </div>
                
            </div>
    )
        ;
    }
}

export default Home;