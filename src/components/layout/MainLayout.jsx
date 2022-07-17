import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Header from '../common/header/Header'
import Menu from '../common/menu/Menu'
import { useState } from 'react'

const MainLayout = ({active,setActive,mode,setMode}) => {
    // const [active, setActive] = useState(false)


    return (
        <div className={`container ${active ? 'active' : ''} ${mode ? 'light' : ''}`}>
            <Header
                active={active}
                setActive={setActive}
                mode={mode}
                setMode={setMode}
            />
            <div className="main-container">
                <div className="main">
                    <div className="content">
                        <div className="overlay">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Menu
                active={active}
                setActive={setActive}
                mode={mode}
            />
        </div>
    )
}

export default MainLayout