import React, { useState, useEffect } from 'react';

import '../assets/widget.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import AppsList from '../data/appsList.json';


const WidgetState = {
    Collapsed: 1,
    Expanded: 2
}


export default function ShareWidget({ storeShareData }) {

    //Widget is initially collapsed
    const [ widgetState, setWidgetState ] = useState(WidgetState.Collapsed);

    //Widget Position set at vertical center
    useEffect(() => {
        document.querySelector('.widget').style.marginBottom = `calc(50vh - ${parseInt(getComputedStyle(document.querySelector('.widget')).height.slice(0,-2))/2}px)`;
    }, []);
    
    return (
        <div className='widget'>
            {
                //Traversal of apps sorted by priority
                AppsList
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
                                    height: widgetState === WidgetState.Collapsed ? (app.showDefault ? '44px' : '0px') : '44px'
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
                    <i className='icon bi bi-share' onClick={() => setWidgetState(WidgetState.Expanded)}></i>
            }
            {
                //Close button compresses Widget to display only default apps
                widgetState === WidgetState.Expanded &&
                    <i className='icon bi bi-x-lg' onClick={() => setWidgetState(WidgetState.Collapsed)}></i>
            }
        </div>
    );
}