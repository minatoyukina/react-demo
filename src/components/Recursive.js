import React, {Component} from 'react'

export default class Recursive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: '1',
                    children: [
                        {name: '1-1'},
                        {
                            name: '1-2', children: [
                                {name: '1-2-1'}
                            ]
                        },
                        {name: '1-3'}
                    ]
                },
                {
                    name: '2',
                    children: [
                        {name: '2-1'}
                    ]
                }
            ]
        }
    }

    loading = (item, index) => {
        if (item.children && item.children.length) {
            return (
                <React.Fragment key={index}>
                    <h3>{item.name}</h3>
                    {item.children.map(this.loading)}
                </React.Fragment>

            )
        } else {
            return <h3 key={index}>{item.name}</h3>
        }
    };


    render() {
        const list = this.state.list;
        return (
            <div className="item">
                {list.map(this.loading)}
            </div>
        )
    }
}
