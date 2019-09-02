import {Redirect, Route, Switch} from "react-router-dom";
import UserApi from "../components/UserApi";
import DataBind from "../components/DataBind";
import React from 'react'
import Home from "../components/Home";
import Father from "../components/Father";
import UserRedux from "../components/UserRedux";
import Login from "../components/Login";
import Recursive from "../components/Recursive";
import PropsApp from "../components/props/PropsApp";
import {Provider} from "react-redux";
import Connect from "../components/Connect";
import store from "../redux/store";
import TodoApp from "../components/todo/TodoApp";
import Style from "../components/Style";
import Ref from "../components/Ref";

import MyView from "../components/antd/MyView";
import CarouselTest from "../components/antd/Carousel";
import Antd from "../components/antd/Antd";
import NotFound from "../components/404";
import WSApp from "../components/websocket";
import LayoutTest from "../components/antd/layout/Layout";

const RouterView = () => (
    <Provider store={store}>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/userApi" exact component={UserApi}/>
            <Route path="/databind" exact component={DataBind}/>
            <Route path="/father" exact component={Father}/>
            <Route path="/userRedux" exact component={UserRedux}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/recursive" exact component={Recursive}/>
            <Route path="/props" exact component={PropsApp}/>
            <Route path="/connect" exact component={Connect}/>
            <Route path="/todo" exact component={TodoApp}/>
            <Route path="/style" exact component={Style}/>
            <Route path="/chat" exact component={WSApp}/>
            <Route path="/ref" exact component={Ref}/>
            <MyView path='/antd' component={MyView}>
                <Route path='/antd' exact component={Antd}/>
                <Route path='/antd/carousel' exact component={CarouselTest}/>
                <Route path='/antd/layout' exact component={LayoutTest}/>
            </MyView>
            <Route component={NotFound}/>
            <Redirect to={'/'}/>
        </Switch>
    </Provider>
);
export default RouterView
