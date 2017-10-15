import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Questions from './components/business/Questions'
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
