import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import styles from './components/Counter.module.scss'
import {UseTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = UseTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <button className={styles.btn} onClick={toggleTheme}>font
            </button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
