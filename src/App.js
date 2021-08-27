import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Sidebar-menu/Menu";



function App() {
  return (
    <div className="App">
        <Header/>
        <div className='main'>
            <Menu/>
            <Home/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
