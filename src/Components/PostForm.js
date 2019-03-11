import React, {Component} from "react";
import axios from 'axios';
import {Typography, TextField, Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {create_new_post} from '../ducks/post'



class PostForm extends Component{
    state={
        title: '',
        content: '',
    }

    submitForm=()=>{
        this.props.create_new_post(this.state.title, this.state.content);
    }

    handleContentChange=event=>{
        this.setState({content: event.target.value});
    }

    handleTitleChange=event=>{
        this.setState({title: event.target.value})
    }

    render(){
        return(
            <div>
                <Typography>Add a Post It!</Typography>
                <TextField 
                helperText="Title"
                onChange={this.handleTitleChange}
                ></TextField>
                <br></br>
                <TextField 
                helperText="Content"
                onChange={this.handleContentChange}
                ></TextField>
                <br></br>
                <Button onClick={this.submitForm}>Post It!</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, {
    create_new_post
})(PostForm);