import React, {Component} from 'react'
import style from '../assets/css/styles.module.css'

export default class Style extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <p className={style.test}>hello</p>
            </div>
        )
    }
}

