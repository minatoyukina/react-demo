import React, {Component} from 'react'
import http from "../server";

export default class UserApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "ccq",
            username: "ccq",
            list: []
        }
    }

    componentDidMount() {
        http.get("/api/user").then(res => {
            this.setState({
                id: res.data.id,
                name: res.data.name,
                username: res.data.username,
                list: res.data
            });
        })
    }

    render() {
        return (
            this.state.list.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>{index}</p>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                        <p>---------------</p>
                    </div>
                )
            })
        )
    }
}
