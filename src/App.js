import React from 'react';
import './App.css';

import ShareWidget from './components/ShareWidget';


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
        <React.Fragment>

            {/* Rest of the Website */}
            <div className='page'>
                <p id="message"></p>
            </div>
    
            {/* Widget: Add Social */}
            <div className='share'>
                <ShareWidget
                    storeShareData={handleStoreShareData}
                />
            </div>

        </React.Fragment>
    );
}

export default App;