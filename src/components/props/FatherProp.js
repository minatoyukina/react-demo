import React, {Component} from 'react'
import SonProp from "./SonProp";

export default class FatherProp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    father = () => 'father';

    componentDidMount() {
        console.log('father props: ');
        console.log(this.props);
        console.log(this.props.app('hi'));
        console.log('--------------');
    }

    render() {
        return (
            <SonProp {...this.props} father={this.father}/>
        )
    }
}

