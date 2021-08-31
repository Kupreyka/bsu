import style from './Home.module.css'
import Posts from "./Posts/Posts";
import {UpdateNewPostText} from "../../redux/state";

const Home = (props) => {
    return (
        <div className={style.home}>
            <div>avatar</div>
            <div>info</div>
            <Posts messageData={props.messageData} dispatch={props.dispatch} NewPostText={props.NewPostText}/>
        </div>
    )
}

export default Home