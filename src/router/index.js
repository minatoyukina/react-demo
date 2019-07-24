import {Route} from "react-router-dom";
import UserApi from "../components/UserApi";
import DataBind from "../components/DataBind";
import React from 'react'
import Home from "../components/Home";
import Father from "../components/Father";
import UserRedux from "../components/UserRedux";
import Login from "../components/Login";
import Recursive from "../components/Recursive";
import Props from "../components/Props";
import {Provider} from "react-redux";
import Connect from "../components/Connect";
import store from "../redux/store";
import TodoApp from "../components/todo/TodoApp";
import Style from "../components/Style";

const RouterView = () => (
    <Provider store={store}>
        <Route path="/" exact component={Home}/>
        <Route path="/userapi" exact component={UserApi}/>
        <Route path="/databind" exact component={DataBind}/>
        <Route path="/father" exact component={Father}/>
        <Route path="/userredux" exact component={UserRedux}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/recursive" exact component={Recursive}/>
        <Route path="/props" exact component={Props}/>
        <Route path="/connect" exact component={Connect}/>
        <Route path="/todo" exact component={TodoApp}/>
        <Route path="/style" exact component={Style}/>
    </Provider>
);
export default RouterView
