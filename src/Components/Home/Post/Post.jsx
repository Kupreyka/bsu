import style from './Post.module.css'
import {Checkbox} from "@material-ui/core";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const Post = (props) => {

    const soldCheckbox = () => {
        if (!props.like) {
            props.addLike()
        } else {
            props.deleteLike()
        }
    }
    return (
        <div className={style.postCustom}>
            <img src={props.smallPhoto}/>
            <div className={style.post}>{props.message}</div>
            <Checkbox {...label} checked={props.like} onChange={soldCheckbox} icon={<FavoriteBorder/>}
                      checkedIcon={<Favorite/>}/>
        </div>
    )
}

export default Post