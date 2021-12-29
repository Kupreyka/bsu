import preloader from "../../../assets/preloader.svg";
import React from "react";


const Preloader = (props) => {
    return(
        <>{props.isFetching ? <img src={preloader} /> : null}</>
    )
}

export default Preloader