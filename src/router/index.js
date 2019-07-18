import {Route} from "react-router-dom";
import User from "../components/User";
import DataBind from "../components/DataBind";
import React from 'react'
import Home from "../components/Home";
import Father from "../components/Father";
import UserList from "../components/UserList";
import Login from "../components/Login";
import Recursive from "../components/Recursive";
import Props from "../components/Props";

const RouterView = () => (
    <div>
        <Route path="/" exact component={Home}/>
        <Route path="/user" exact component={User}/>
        <Route path="/databind" exact component={DataBind}/>
        <Route path="/father" exact component={Father}/>
        <Route path="/userlist" exact component={UserList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/recursive" exact component={Recursive}/>
        <Route path="/props" exact component={Props}/>
    </div>
);
export default RouterView