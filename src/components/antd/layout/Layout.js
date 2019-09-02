import React from 'react'
import {Layout} from "antd/lib/index";
import layout from './layout.module.css'

const {Header, Content, Footer} = Layout;

export default class LayoutTest extends React.Component {

    render() {
        return (
            <Layout className={layout.layout}>
                <div className={layout.container}>
                    <Header className={layout.header}>Header</Header>
                    <Content className={layout.content}>Content</Content>
                    {/*<div style={{height: 2000, background: "pink"}}/>*/}
                </div>
                <Footer className={layout.footer}>Footer</Footer>
            </Layout>
        )
    }
}