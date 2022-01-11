import style from './Home.module.css'
import PostsContainer from "./Posts/PostsContainrt";
import HomeInfo from "./HomeInfo/HomeInfo";
import {Redirect} from "react-router-dom";
import {updateProfileStatus} from "../../redux/Profile-page-reducer";


const Home = (props) => {

    return (
        <div className={style.home}>
            <HomeInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <PostsContainer/>
        </div>
    )
}

export default Home