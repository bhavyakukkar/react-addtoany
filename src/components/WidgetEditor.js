import React from 'react';


//Renders Table Input for respective App properties
function renderInput(app) {
    return (
        <React.Fragment key={app.name}>
            <tr><td colSpan={2} className='divider'></td></tr>
            
            {/* App Priority */}
            <tr>
                <td className='key'><label htmlFor='apiUrl'>Priority:</label></td>
                <td className='value'><input name='priority' type='number' defaultValue={app.priority}/></td>
            </tr>

            {/* App Name/ID */}
            <tr>
                <td className='key'><label htmlFor='name'>Social ID:</label></td>
                <td className='value'><input name='name' type='text' defaultValue={app.name}/></td>
            </tr>

            {/* App Display Name */}
            <tr>
                <td className='key'><label htmlFor='display'>Social Name:</label></td>
                <td className='value'><input name='display' type='text' defaultValue={app.display}/></td>
            </tr>

            {/* App API-Url */}
            <tr>
                <td className='key'><label htmlFor='apiUrl'>API Url:</label></td>
                <td className='value'><input name='apiUrl' type='text' defaultValue={app.apiUrl}/></td>
            </tr>

            {/* whether App is shown in Collapsed Widget */}
            <tr>
                <td className='key'><label htmlFor='showDefault'>Show when Collapsed:</label></td>
                <td className='value'><input name='showDefault' type='checkbox' defaultChecked={app.showDefault}/></td>
            </tr>

            {/* Delete App */}
            <tr>
                <td colSpan={2}><i className='bi bi-trash3'></i></td>
            </tr>
        </React.Fragment>
    );
}

export default function WidgetEditor({ appsList }) {

    return (
        <div className='table-container'>
            <form>
            <table className='table'>
            <tbody id='table-edit'>
                {
                    appsList
                        .sort((app1, app2) => (app1.priority - app2.priority))
                        .map(app => renderInput(app))
                }
            </tbody>
            </table>
            </form>
        </div>
    );
}