import React, {Component} from 'react'
import Props from "./Props";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <a href={"/user"}><p>User</p></a>
                <a href={"/databind"}><p>DataBind</p></a>
                <a href={"/father"}><p>Father</p></a>
                <a href={"/userlist"}><p>UserList</p></a>
                <a href={"/login"}><p>Login</p></a>
                <a href={"/recursive"}><p>Recursive</p></a>
                <a href={"/props"}><p>Props</p></a>
                <Props name='jerry'/>
            </div>
        )
    }
}