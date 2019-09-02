import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Antd extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Link to={"/antd/carousel"}><p>Carousel</p></Link>
                <Link to={"/antd/layout"}><p>Layout</p></Link>
            </div>
        )
    }
}
