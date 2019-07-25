import React, {Component} from 'react'

export default class SonProp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    son = () => 'son';

    componentDidMount() {
        console.log('son props: ');
        console.log(this.props);
        console.log('--------------');
    }


    render() {
        const {gender, name} = this.props;
        return (
            <div>
                <p>hello {' '} {name}</p>
                <p>you're {' '} {gender}</p>
            </div>
        )
    }
}

