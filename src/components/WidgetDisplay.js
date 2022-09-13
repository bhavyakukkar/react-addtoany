import React, { useState } from 'react';

const WidgetState = {
    Collapsed: 1,
    Expanded: 2
}



export default function WidgetDisplay({ appsList, storeShareData }) {

    //Widget is initially collapsed
    const [ widgetState, setWidgetState ] = useState(WidgetState.Collapsed);

    return (
        <>
        {
            //Traversal of apps sorted by priority
            appsList
                .sort((app1, app2) => (app1.priority - app2.priority))
                .map(app => {
                    return (
                        <a
                            key={app.name}
                            onClick={() => storeShareData(app.name)}

                            //API Call
                            href={app.apiUrl + window.location.href}
                            target="_blank"
                            rel="noreferrer"

                            className='item'

                            //App visibility based on Widget Collapsed/Expanded
                            style={{
                                visibility: widgetState === WidgetState.Collapsed ? (app.showDefault ? 'visible' : 'hidden') : 'visible',
                                height: widgetState === WidgetState.Collapsed ? (app.showDefault ? '44px' : '0px') : '44px',
                                zIndex: app.priority
                            }}
                        >
                            <img
                                src={`/icons/${app.name}.svg`}
                                className={`icon`}
                                alt={app.display}>
                            </img>
                        </a>
                    );
                })
        }
        {
            //Share-other button expands Widget to display all apps
            widgetState === WidgetState.Collapsed &&
                <i
                    className='icon bi bi-share'
                    onClick={() => setWidgetState(WidgetState.Expanded)}
                    style={{zIndex: 100}}>
                </i>
        }
        {
            //Close button compresses Widget to display only default apps
            widgetState === WidgetState.Expanded &&
                <i
                    className='icon bi bi-x-lg'
                    onClick={() => setWidgetState(WidgetState.Collapsed)}
                    style={{zIndex: 100}}>
                </i>
        }
        </>
    );
}
