
import './App.css';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Sidebar-menu/Menu";
import {Route} from "react-router-dom";
import Message from "./Components/Message/Message";
import Feed from "./Components/Feed/Feed";


function App(props) {
    return (
        <div className="App">
            <Header/>
            <div className='main'>
                <Menu/>
                <div className="components">
                    <Route path='/home' render={() => <Home messageData={props.state.ProfilePage.messageData}
                                                            dispatch={props.dispatch}
                                                            NewPostText={props.state.ProfilePage.NewPostText}/>}/>
                    <Route path='/message' render={() => <Message DialogsPage={props.state.DialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
