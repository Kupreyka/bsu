import style from './Home.module.css'
import Posts from "./Posts/Posts";
import {UpdateNewPostText} from "../../redux/state";

const Home = (props) => {
    return (
        <div className={style.home}>
            <div>avatar</div>
            <div>info</div>
            <Posts messageData={props.messageData} addPost={props.addPost} NewPostText={props.NewPostText} UpdateNewPostText={props.UpdateNewPostText}/>
        </div>
    )
}

export default Home