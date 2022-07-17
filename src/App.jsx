import './App.scss'
import 'boxicons/css/boxicons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import { useState } from 'react'

function App() {
    const [active, setActive] = useState(false)

    const [mode,setMode] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                <MainLayout 
                    active={active} 
                    setActive={setActive} 
                    mode={mode}
                    setMode={setMode}
                />}>
                    <Route index element={
                        <Home 
                            active={active} 
                            setActive={setActive}
                            mode={mode}
                            setMode={setMode}
                        />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
