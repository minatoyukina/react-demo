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

    click = e => {
        console.log(e.target)
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}
                       onClick={this.click}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}