import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Sidebar-menu/Menu";
import {Route} from "react-router-dom";
import Message from "./Components/Message/Message";
import Feed from "./Components/Feed/Feed";



function App() {
  return (
    <div className="App">
        <Header/>
        <div className='main'>
            <Menu/>
            <div className="components">
                <Route path='/home' component={Home}/>
                <Route path='/message' component={Message}/>
                <Route path='/feed' component={Feed}/>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
