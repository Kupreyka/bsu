
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Sidebar-menu/Menu";
import {Route} from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import MessageContainer from "./Components/Message/MessgeContainer";
import FriendsClass from "./Components/Friends/FriendsContainer";
import HomeContainer from "./Components/Home/HomeContainer";


function App(props) {
    return (
        <div className="App">
            <Header/>
            <div className='main'>
                <Menu/>
                <div className="components">
                    <Route path='/home/:UserId?' render={() => <HomeContainer />}/>
                    <Route path='/message' render={() => <MessageContainer />}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                    <Route path='/friends' render={() => <FriendsClass/>}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
