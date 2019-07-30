import React from 'react'

export default class Ref extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    handleClick() {
        console.log(this.myRef);
        this.myRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <input
                    type="button"
                    value="点我输入框获取焦点"
                    onClick={this.handleClick.bind(this)}
                />
            </div>
        );
    }
}