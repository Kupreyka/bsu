
import './App.css';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Sidebar-menu/Menu";
import {Route} from "react-router-dom";
import Message from "./Components/Message/Message";
import Feed from "./Components/Feed/Feed";
import MessageContainer from "./Components/Message/MessgeContainer";


function App(props) {
    return (
        <div className="App">
            <Header/>
            <div className='main'>
                <Menu/>
                <div className="components">
                    <Route path='/home' render={() => <Home />}/>
                    <Route path='/message' render={() => <MessageContainer />}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
