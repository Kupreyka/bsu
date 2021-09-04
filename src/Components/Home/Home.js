import style from './Home.module.css'
import PostsContainer from "./Posts/PostsContainrt";


const Home = (props) => {
    return (
        <div className={style.home}>
            <div>avatar</div>
            <div>info</div>
            <PostsContainer  store={props.store}/>
        </div>
    )
}

export default Home