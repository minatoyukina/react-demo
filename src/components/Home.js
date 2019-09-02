import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Link to={"/userApi"}><p>UserApi</p></Link>
                <Link to={"/databind"}><p>DataBind</p></Link>
                <Link to={"/father"}><p>Father</p></Link>
                <Link to={"/userRedux"}><p>UserRedux</p></Link>
                <Link to={"/login"}><p>Login</p></Link>
                <Link to={"/recursive"}><p>Recursive</p></Link>
                <Link to={"/props"}><p>Props</p></Link>
                <Link to={"/connect"}><p>Connect</p></Link>
                <Link to={"/chat"}><p>WSApp</p></Link>
                <Link to={"/todo"}><p>Todo</p></Link>
                <Link to={"/style"} className="test"><p>Style</p></Link>
                <Link to={"/ref"}><p>Ref</p></Link>
                <Link to={"/antd"}><p>Antd</p></Link>
            </div>
        )
    }
}
