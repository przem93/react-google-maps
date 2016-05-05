import alt from  '../alt';

class MainActions {
    constructor() {

    }

    getPlace(value) {
        $.ajax({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${value}`,
            type: 'GET'
        }).done((data) => {
            this.updatePlace(data);
        });
    }

    updatePlace(data) {
        return data;
    }

    setPosition(data) {
        return data;
    }
}

export default alt.createActions(MainActions);
