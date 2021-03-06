import React from 'react';
import ReactDOM from 'react-dom';
import './css/Flex.css';
import './css/App.css';
import './css/Animation.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/animate.css/animate.min.css';
import Bartender from './Bartender';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bartender />, document.getElementById('root'));
registerServiceWorker();
