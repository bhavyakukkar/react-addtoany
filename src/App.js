import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Widget from './components/Widget';


//Called every time page is shared
function handleStoreShareData({ appName }) {
    /*
    Following object can be pushed to the server:
    const time = new Date().getTime();

    {
        time, eg: 1663004372159
        appName, eg: 'whatsapp'
    }
    */

    //Message on page once user returns after sharing
    document.querySelector("#message").innerHTML = 'Thank you for sharing!';
}


function App() {

    return (
        <React.Fragment >

            {/* Temporary Navbar */}
            <nav>
                <Link to="/">User</Link>
                <Link to="/admin">Admin</Link>
            </nav>

            {/* Rest of the Website */}
            <div className='page'>
                <p id="message"></p>
            </div>

            {/* Widget with router to toggle Admin privileges */}
            <div className='share'>
                <Routes>
                    <Route path="admin">
                        <Route path="edit-widget" element={
                            <Widget adminPrivileges={true} editMode={true} storeShareData={handleStoreShareData} key={Math.random()}/>
                        }/>
                        <Route index element={
                            <Widget adminPrivileges={true} editMode={false} storeShareData={handleStoreShareData} key={Math.random()}/>
                        }/>
                    </Route>

                    <Route path="/" element={
                        <Widget adminPrivileges={false} storeShareData={handleStoreShareData} key={Math.random()}/>
                    }/>
                </Routes>
            </div>

        </React.Fragment>
    );
}

export default App;