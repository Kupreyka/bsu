import './App.css';
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Sidebar-menu/Menu";
import {Redirect, Route, withRouter} from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import MessageContainer from "./Components/Message/MessgeContainer";
import FriendsClass from "./Components/Friends/FriendsContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./Components/Friends/Preloader/Preloader";
import React from "react";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <div className='main'>
                    <Menu/>
                    <div className="components">
                        <Route exact path='/bsu' render={()=> <Redirect to={'/home'}/>}/>
                        <Route exact path='/' render={()=> <Redirect to={'/home'}/>}/>
                        <Route path='/home/:UserId?' render={() => <HomeContainer/>}/>
                        <Route path='/message' render={() => <MessageContainer/>}/>
                        <Route path='/feed' render={() => <Feed/>}/>
                        <Route path='/friends' render={() => <FriendsClass/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
                {/*















                */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
