import React, {Component} from 'react'
import Child from "./Child";

export default class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Message from Father",
            name: 'John',
            age: 24
        }
    }

    callback = (msg, name, age) => {
        this.setState({
            msg: msg,
            name: name,
            age: age
        })
    };

    onRef = (ref) => {
        this.child = ref
    };

    test = () => {
        this.child.test()
    };

    render() {
        return (
            <div>
                <p>Message: &nbsp;&nbsp;{this.state.msg}</p>
                <Child callback={this.callback} age={this.state.age} name={this.state.name} onRef={this.onRef}/>
                <button onClick={this.test}>Test</button>
            </div>
        )
    }
}