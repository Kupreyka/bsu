import style from './Header.module.css'
import logo from './images/logo.png'
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

const Header = (props) => {
    return(
        <div className={style.header}>
            <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
            <div className={style.customHeader}>{props.isAuth && <div><Stack direction="row" spacing={2}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src={`https://social-network.samuraijs.com/activecontent/images/users/${props.loginId}/user.jpg?v=6`}/>
                </StyledBadge></Stack></div>}<div className={style.registration}>
                {props.isAuth
                    ? <div className={style.headerCustomItem}>{props.login} <Button onClick={props.logout} variant="outlined">Logout</Button></div>
                    : <NavLink to={'/login'}>
                        <Button variant="contained" href="#contained-buttons">
                            Link
                        </Button>
                    </NavLink>
                }
            </div></div>

        </div>
    )
}

export default Header;