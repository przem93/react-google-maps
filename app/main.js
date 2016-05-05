if (typeof window !== 'undefined') {
    require('./styles/style.scss');
}

import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery/dist/jquery.js');
}

ReactDOM.render(<Routing/>, document.getElementById('application'));

