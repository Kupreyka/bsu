import style from './Home.module.css'
import PostsContainer from "./Posts/PostsContainrt";
import HomeInfo from "./HomeInfo/HomeInfo";


const Home = (props) => {

    return (
        <div className={style.home}>
            <HomeInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <PostsContainer/>
        </div>
    )
}

export default Home