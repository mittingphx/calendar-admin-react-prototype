/**
 * File:    index.jsx
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *   Entry point for the React app prototype admin website.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// force first page in menu to load when app loads
setTimeout(function() {
    console.log('going to first page');
    window.title = 'Event Management Website | TucsonLovesMusic';
    document.querySelector('.sidebarListItem').click();
}, 400);
window.title = 'Loading...';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
