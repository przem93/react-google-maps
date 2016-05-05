import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Main from './modules/main/Main';
import ErrorNoMatch from './modules/ErrorNoMatch';
import Application from './modules/application/Application';


export default class Routing extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Application}>
                <IndexRoute component={Main}/>
                <Route path="*" component={ErrorNoMatch}/>
            </Route>
        </Router>;
    }
}