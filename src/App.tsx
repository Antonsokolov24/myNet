import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/New/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Musics/Music";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPages}/>}/>
                        <Route path='/profile' element={<Profile state={props.state.profilePages}/>}/>
                        <Route path='/news' element={<News  newsData={props.newsData}/>}/>
                        <Route path='/musics' element={<Music musicsData={props.musicsData}/>}/>
                        <Route path='/settings' element={<Setting settingsData={props.settingsData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
