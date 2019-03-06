import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts/Posts";

class Nav extends Component {
    render() {
        return (
        <HashRouter>
            <div>
                <h1> Simple SPA </h1>
                <ul className = "header" >
                        <li > 
                            < NavLink to = "/" > Home </NavLink>
                        </li >
                        <li> 
                            <NavLink to = "/posts" > Posts </NavLink>
                        </li >
                        <li> 
                            < NavLink to = "/create" > Create a Post </NavLink>
                        </li >
                </ul>
                <div className = "content" > 
                    <Route exact path = "/" component = {Home} > </Route>
                </div>
                {/* <div className = "content" > 
                    <Route exact path = "/posts" component = {Posts} > </Route>
                </div> */}
            </div>
        </HashRouter>
    )
        ;
    }
}

export default Nav;
