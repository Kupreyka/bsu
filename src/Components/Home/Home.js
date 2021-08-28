import style from './Home.module.css'
import Posts from "./Posts/Posts";

const Home = (props) => {
    return (
        <div className={style.home}>
            <div>avatar</div>
            <div>info</div>
            <Posts messageData={props.messageData}/>
        </div>
    )
}

export default Home