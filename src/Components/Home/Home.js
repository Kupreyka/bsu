import style from './Home.module.css'
import HomeInfo from "./HomeInfo/HomeInfo";


const Home = (props) => {

    return (
        <div className={style.home}>
            <HomeInfo profile={props.profile} status={props.status} isOwner={props.isOwner}
                      updateProfileStatus={props.updateProfileStatus} savePhoto={props.savePhoto}
                      saveProfile={props.saveProfile} isAuth={props.isAuth}/>
        </div>
    )
}

export default Home