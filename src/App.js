
import './App.css';
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Sidebar-menu/Menu";
import {Route} from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import MessageContainer from "./Components/Message/MessgeContainer";
import FriendsClass from "./Components/Friends/FriendsContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


function App(props) {
    return (
        <div className="App">
            <HeaderContainer/>
            <div className='main'>
                <Menu/>
                <div className="components">
                    <Route path='/home/:UserId?' render={() => <HomeContainer />}/>
                    <Route path='/message' render={() => <MessageContainer />}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                    <Route path='/friends' render={() => <FriendsClass/>}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
