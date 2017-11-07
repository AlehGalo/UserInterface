// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import {browserHistory} from 'react-router';
// // import registerServiceWorker from './registerServiceWorker';
//
// import Routes from './routes'
//
// ReactDOM.render(
//     <Routes history={browserHistory}/>,
//     document.getElementById('root')
// );
//


// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router';
//
// import Routes from './routes';
//
// import './index.css';
//
// ReactDOM.render(
//     <Routes history={browserHistory} />,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));