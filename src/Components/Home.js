import React, {Component} from "react";
import Posts from "./Posts/Posts.js";
import PostForm from './PostForm';
import axios from 'axios';
import { connect } from 'react-redux';
import {load_initial_posts} from "../ducks/post"

class Home extends Component {
    componentDidMount(){
        this.props.load_initial_posts();
    }


    render() {
        return (
            < div >
                < h2 > Welcome </h2>
                < p >
                This is a simple front-end interface to demo a single-page application in React. Starter code found <a href="https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm" > here. </a>    
                </p>
                <Posts ></Posts>
                <div>
                <PostForm 
                    updateState={this.updateState}
                ></PostForm>
                </div>
                
            </div>
    )
        ;
    }
}

const mapStateToProps = (state, ownProps) => {
    const {post} = state;
    const {posts} = post;
    return { 
        posts
    };
};

export default connect(mapStateToProps,{
    load_initial_posts,
})(Home);