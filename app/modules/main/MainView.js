import React from 'react';
import {Col, Row} from '../../components';

export default class MainView extends React.Component {
    componentDidMount() {
        this.map = new google.maps.Map(this.mapRef, {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 8
        });

        this.findLocation();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.lat !== this.props.lat || extProps.lng !== this.props.lng) {
            this.map.setCenter({
                lat: nextProps.lat,
                lng: nextProps.lng
            });
        }
    }

    findLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.props.setPosition);
        }
    }

    render() {
        return <Row>
            <Col s={12} className="input-field">
                <input placeholder="Wyszukaj miejsce" 
                       id="place" 
                       onChange={this.props.getPlace}
                       type="text" 
                       className="validate"/>
            </Col>
            <Col s={12} className="map">
                <div ref={(ref) => this.mapRef = ref}
                     style={{width: "100%", height: "600px"}}></div>
            </Col>
        </Row>;
    }
}