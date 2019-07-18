import React, {Component} from 'react'

export default class DataBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "ccq"
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}