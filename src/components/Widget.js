import React, { useEffect, useState } from 'react';
import WidgetDisplay from './WidgetDisplay';
import WidgetEditor from './WidgetEditor';

import '../assets/widget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';



export default function Widget({ adminPrivileges, storeShareData, editMode }) {
    const [ appsList, setAppsList ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/appsList.json?id=${Math.random()}`).then(res => res.json()).then(data => {
            setAppsList(data);
        });
    }, []);

    //Widget Position set at vertical center
    useEffect(() => {
        if(!editMode)
            document.querySelector('.widget').style.marginBottom = `calc(50vh - ${parseInt(getComputedStyle(document.querySelector('.widget')).height.slice(0,-2))/2}px)`;
    }, []);

    return (
        <>
        {
            editMode &&
                <WidgetEditor appsList={appsList}/>
        }
        {
            !editMode &&
                <div className='widget'>
                    {
                        appsList.length === 0 &&
                        <div className="spinner-border" role="status"></div>
                    }
                    {
                        appsList.length !== 0 &&
                            <>
                                {
                                    adminPrivileges &&
                                        <Link to="/admin/edit-widget" className='icon edit bi bi-pencil-fill'></Link>
                                        
                                }
                                <WidgetDisplay appsList={appsList} storeShareData={storeShareData} />
                            </>
                    }
                </div>
        }
        </>
    );
}