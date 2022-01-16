import preloader from "../../../assets/preloader.svg";
import React from "react";


const Preloader = (props) => {
    return(
        <div>{props.isFetching ? <img src={preloader} /> : null}</div>
    )
}

export default Preloader