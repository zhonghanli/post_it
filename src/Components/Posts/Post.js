import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {delete_post} from "../../ducks/post"

const styles = {
    card: {
        maxWidth: 300,
    },
    media: {
        objectFit: 'cover',
    },
};

class Post extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className = {classes.card} 
                onClick={()=>{this.props.delete_post(this.props.id)}}
            >
                <CardContent >
                    < Typography component = "h1" >
                        {this.props.title}
                    </Typography>
                    < Typography component = "p" >
                        {this.props.content}
                    </Typography>
                </CardContent>
            </Card>
    );
    }
}

const mapStateToProps=()=>{

}


export default connect(mapStateToProps,{delete_post})(withStyles(styles)(Post));