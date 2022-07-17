import './header.scss'
import { Twirl  as Hamburger } from 'hamburger-react'
import Switch from "react-switch";
import DarkModeIcon  from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const Header = ({ active, setActive, mode, setMode }) => {

    const handleToggle = () => {
        setMode(!mode)
    }
    return (
        <div className={`header ${mode ? 'light' : ''}`}>
            <div className="header__content">
                <div className="logo">LOGO</div>
                <div style={{display: 'flex', alignItems: 'center', columnGap: 20}}>
                    <Switch 
                        checked={mode} 
                        onChange={handleToggle}
                        checkedIcon={<DarkModeIcon style={{color: 'white'}} fontSize="small"/>}
                        uncheckedIcon={<LightModeIcon style={{color: 'black'}} fontSize="small"/>}
                        offColor={'#fff'}
                        onColor={'#000'}
                        offHandleColor={'#000'}
                        className='switch'
                    />
                    <Hamburger toggled={active} toggle={setActive} />
                </div>
                
                {/* <div
                    className={`menu-toggle ${active ? 'active' : ''}`}
                    onClick={() => setActive(!active)}
                >
                    <i className='bx bx-menu'></i>
                    <i className='bx bx-x'></i>
                </div> */}
            </div>
        </div>
    )
}

export default Header