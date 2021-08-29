import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Sidebar-menu/Menu";
import {Route} from "react-router-dom";
import Message from "./Components/Message/Message";
import Feed from "./Components/Feed/Feed";
import {UpdateNewPostText} from "./redux/state";



function App(props) {
  return (
    <div className="App">
        <Header/>
        <div className='main'>
            <Menu/>
            <div className="components">
                <Route path='/home' render={()=><Home messageData={props.state.ProfilePage.messageData} addPost={props.addPost} NewPostText={props.state.ProfilePage.NewPostText} UpdateNewPostText={props.UpdateNewPostText}/>}/>
                <Route path='/message' render={()=><Message DialogsPage={props.state.DialogsPage} addMessage={props.addMessage} />}/>
                <Route path='/feed' render={()=><Feed/>}/>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
