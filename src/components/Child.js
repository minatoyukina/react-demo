import React, {Component} from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Message from Child",
            name: 'Andy',
            age: 12
        }
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    change = () => {
        this.props.callback(this.state.msg, this.state.name, this.state.age)
    };

    test = () => {
        alert('hi father')
    };

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
                <button onClick={this.change}>Click</button>
            </div>
        )
    }
}