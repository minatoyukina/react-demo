import React, {Component} from 'react'
import FatherProp from "./FatherProp";

export default class PropsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    app = msg => 'app: ' + msg;

    componentDidMount() {
        console.log('app props: ');
        console.log(this.props);
        console.log('--------------');
    }

    render() {
        return (
            <FatherProp name='father' gender={0} app={this.app}/>
        )
    }
}
