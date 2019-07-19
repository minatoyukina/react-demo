import React, {Component} from 'react'
import {connect} from "react-redux";

class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <p>hello&nbsp;{this.state.name}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.username,
    password: state.password
});

const mapDispatchToProps = (state) => {
    return {
    }
};

export default Connect = connect(mapStateToProps, mapDispatchToProps)(Connect)