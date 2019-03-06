import React, {Component} from "react";
import axios from 'axios';
import {Typography, TextField, Button} from '@material-ui/core';



class PostForm extends Component{
    state={
        title: '',
        content: '',
    }

    submitForm=()=>{
        axios.post('http://localhost:8080/createpost',{
            title: this.state.title,
            content: this.state.content})
            .then(res=>{
                this.props.updateState(res.data.id,res.data.title, res.data.content)
            })       
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

export default PostForm;