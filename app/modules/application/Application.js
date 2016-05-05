import React from 'react';
import AltContainer from 'alt-container';
import ApplicationView from './ApplicationView';

export default class Application extends React.Component {
    render() {
        return <AltContainer>
            <ApplicationView {...this.props} />
        </AltContainer>;
    }
}