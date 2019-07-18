import React, {Component} from 'react'
import store from '../redux/store'

let index = 0;

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        }
    }

    componentDidMount() {
        store.subscribe(() => this.setState({user: store.getState()})
        );
    }

    change = () => {
        store.dispatch({
            type: 'ADD_USER',
            user: {name: 'Tom', id: index++}
        });
    };

    render() {
        let userList = this.state.user.map((item, index) => {
            return (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.id}</p>
                </div>
            )
        });
        return (
            <div>
                {userList}
                <button onClick={this.change}>AddUser</button>
            </div>
        )
    }
}