import React, { Component } from 'react';
import Post from './Post.js';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';


class Posts extends Component{
    populateGrid = (posts) =>{
        //Have to check for undefined or else this returns an error - posts has an undefined state?
        console.log(posts);
        if (posts !== undefined){
            return posts.map((item, index)=>{
                if(item!=undefined){
                    return(
                        <Grid key={index}>
                            <Post
                            id={item['id']}
                            title={item['title']}
                            content={item['content']}
                            ></Post>
                        </Grid>
                    )

                }
            }
            )
        }
    }

    render(){
        return(
            <div className="posts" style={{padding:16}}>
            <Grid container justify="flex-start">
                {this.populateGrid(this.props.posts)}
              </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    const {post} = state;
    const {posts} = post;
    return{
        posts
    } 
}

export default connect(mapStateToProps)(Posts);