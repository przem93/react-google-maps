import alt from  '../alt';
import MainActions from '../actions/MainActions';

class MainStore {
    constructor() {
        this.lat = 52.2438085;
        this.lng = 20.977377;
        this.loading = false;

        this.bindListeners({
            onUpdatePlace: MainActions.updatePlace,
            onSetPosition: MainActions.setPosition
        });
    }

    onUpdatePlace(data) {
        if(data.results.length > 0) {
            this.lat = data.results[0].geometry.location.lat;
            this.lng = data.results[0].geometry.location.lng;
        }
    }

    onSetPosition(data) {
        this.lat = data.lat;
        this.lng = data.lng;
        this.loading = false;
    }
}

export default alt.createStore(MainStore, 'MainStore');