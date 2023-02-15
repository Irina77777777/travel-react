// import Button from '@mui/material/Button'
// import { NavLink } from "react-router-dom"
import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            {/* <Button color="inherit">
                <NavLink to={'/'}>HOME </NavLink>{' '}
            </Button> */}
            <MenuItem to="/"> Home </MenuItem>
            <MenuItem to="/asia"> Asia </MenuItem>
            <MenuItem to="/africa"> Africa </MenuItem>
            <MenuItem to="/europe"> Europe </MenuItem>
            <MenuItem to="/about"> About </MenuItem>
            <MenuItem to="/favorite"> Favorite </MenuItem>

            {/* <Button color="inherit">AZIA</Button>
            <Button color="inherit">AFRICA</Button>
            <Button color="inherit">EUROPE</Button>
            <Button color="inherit">
                <NavLink to={'/about'}>ABOUT </NavLink>{' '}
            </Button>
            <Button color="inherit">FAVORITE</Button> */}
        </>
    )
}
export default Menu
