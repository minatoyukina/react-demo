import {Route} from "react-router-dom";
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

const RouterView = () => (
    <Provider store={store}>
        <Route path="/" exact component={Home}/>
        <Route path="/userapi" exact component={UserApi}/>
        <Route path="/databind" exact component={DataBind}/>
        <Route path="/father" exact component={Father}/>
        <Route path="/userredux" exact component={UserRedux}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/recursive" exact component={Recursive}/>
        <Route path="/props" exact component={PropsApp}/>
        <Route path="/connect" exact component={Connect}/>
        <Route path="/todo" exact component={TodoApp}/>
        <Route path="/style" exact component={Style}/>
        <Route path="/ref" exact component={Ref}/>
        <MyView path='/antd' component={MyView}>
            <Route path='/antd/home' component={Antd}/>
            <Route path='/antd/carousel' component={CarouselTest}/>
        </MyView>
    </Provider>
);
export default RouterView
