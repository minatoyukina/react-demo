import React, {Component} from 'react'

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
    }

    render() {
        return (
            <div>
                <p> hello&nbsp;{this.props.name}</p>
            </div>
        )
    }
}
