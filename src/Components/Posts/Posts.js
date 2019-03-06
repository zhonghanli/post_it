import React, { Component } from 'react';
import Post from './Post.js';
import Grid from '@material-ui/core/Grid';

class Posts extends Component{

    populateGrid = (posts) =>{
        console.log(posts);
        return posts.map((item, index)=>{
            return(
                <Grid key={index}>
                    <Post
                    id={item['id']}
                    title={item['title']}
                    content={item['content']}
                    deletePost={this.props.deletePost}
                    ></Post>
                </Grid>
            )
        }
        )
    }

    render(){
        return(
            <div className="posts">
            <Grid container justify="flex-start" spacing={16}>
                {this.populateGrid(this.props.posts)}
              </Grid>
            </div>
        )
    }
}

export default Posts;