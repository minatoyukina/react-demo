import React, {Component} from 'react'

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div {...this.props}>
                hello&nbsp;{this.props.name}
            </div>
        )
    }
}