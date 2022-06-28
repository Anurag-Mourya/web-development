import NavbarMode from './NavbarMode';
import TextFormMode from '../../TextForm';
import AboutUs from '../../AboutUs';
import { useState } from "react";

import {
    // BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function ModeApp() {
    const [mode, setMode] = useState('light');//whether dark mode is enabaled or not..

    // for remove body classes to apply classes individually
    const removeBodyClasses = () =>{
        document.body.classList.remove('bg-primary')
        document.body.classList.remove('bg-danser')
        document.body.classList.remove('bg-success')
        document.body.classList.remove('bg-warning')
    }
    const toggleMode = (cls) => {
        // call remove body classes function
        removeBodyClasses();
        
        document.body.classList.add('bg-' + cls);
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }
    return (
        <>
           <NavbarMode Title='TextUtilities' MyHome='MeraHome' About="MyAbout" TextForm="Text Form Mode" mode={mode} toggleMode={toggleMode}/>

            <Routes>
                {/* <Route path="/" element={<ModeApp />} /> */}
                <Route exact path="Aboutus" element={<AboutUs />} />
                <Route exact path="TextFormMode" element={<TextFormMode/>} />
            </Routes>
           
                 
        </>
    );
}

