import React from 'react';
import AltContainer from 'alt-container';
import MainView from './MainView';
import MainActions from '../../actions/MainActions';
import MainStore from '../../stores/MainStore';

export default class Counter extends React.Component {
    getPlace = (e) => {
        if(this.getPlaceTimeOut) {
            clearTimeout(this.getPlaceTimeOut);
        }

        this.getPlaceTimeOut = setTimeout(MainActions.getPlace.bind(this, e.target.value), 1000);
    };

    setPosition(position) {
        MainActions.setPosition({lat: position.coords.latitude, lng: position.coords.longitude});
    }

    render() {
        return <AltContainer store={MainStore}>
            <MainView setPosition={this.setPosition}
                      getPlace={this.getPlace}/>
        </AltContainer>;
    }
}