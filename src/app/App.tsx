import React from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {UseTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = UseTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>font</button>
            <AppRouter/>
        </div>
    );
};

export default App;
