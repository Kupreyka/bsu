import style from './Home.module.css'
import PostsContainer from "./Posts/PostsContainrt";
import HomeInfo from "./HomeInfo/HomeInfo";
import {Redirect} from "react-router-dom";


const Home = (props) => {

    return (
        <div className={style.home}>
            <HomeInfo profile={props.profile} status={props.status}/>
            <PostsContainer/>
        </div>
    )
}

export default Home