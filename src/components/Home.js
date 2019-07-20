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
                <a href={"/userapi"}><p>UserApi</p></a>
                <a href={"/databind"}><p>DataBind</p></a>
                <a href={"/father"}><p>Father</p></a>
                <a href={"/userredux"}><p>UserRedux</p></a>
                <a href={"/login"}><p>Login</p></a>
                <a href={"/recursive"}><p>Recursive</p></a>
                <a href={"/props"}><p>Props</p></a>
                <a href={"/connect"}><p>Connect</p></a>
                <a href={"/todo"}><p>Todo</p></a>
                <Props name='jerry'/>
            </div>
        )
    }
}
