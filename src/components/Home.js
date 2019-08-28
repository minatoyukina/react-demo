import React, {Component} from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <a href={"/userApi"}><p>UserApi</p></a>
                <a href={"/databind"}><p>DataBind</p></a>
                <a href={"/father"}><p>Father</p></a>
                <a href={"/userRedux"}><p>UserRedux</p></a>
                <a href={"/login"}><p>Login</p></a>
                <a href={"/recursive"}><p>Recursive</p></a>
                <a href={"/props"}><p>Props</p></a>
                <a href={"/connect"}><p>Connect</p></a>
                <a href={"/chat"}><p>WSApp</p></a>
                <a href={"/todo"}><p>Todo</p></a>
                <a href={"/style"} className="test"><p>Style</p></a>
                <a href={"/ref"}><p>Ref</p></a>
                <a href={"/antd/home"}><p>Antd</p></a>
            </div>
        )
    }
}
