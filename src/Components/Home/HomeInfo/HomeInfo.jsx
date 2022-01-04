import React from "react";
import Preloader from "../../Friends/Preloader/Preloader";

const HomeInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (<>
            <div><img src={props.profile.photos.large}/></div>
            <div>info</div>
        </>
    )
}

export default HomeInfo;