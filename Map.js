import MapView from 'react-native-maps';

import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

import flagBlueImg from './img/flag-blue.png';
import flagPinkImg from './img/flag-pink.png';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 6.833140;
const LONGITUDE = 79.882270;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class Map extends Component {

    constructor() {
        super();
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        };
    }

    onRegionChange(region) {
        this.setState({region});
        console.log(region);
    }

    render() {
        return (
            <MapView
                style={ styles.map }
                region={this.state.region}
                onRegionChange={region => this.onRegionChange(region)}>

                <MapView.Marker
                    coordinate={{
                        latitude: LATITUDE + SPACE,
                        longitude: LONGITUDE + SPACE,
                    }}
                    centerOffset={{x: -18, y: -60}}
                    anchor={{x: 0.69, y: 1}}
                    image={flagBlueImg}>
                </MapView.Marker>

                <MapView.Marker
                    coordinate={{
                        latitude: LATITUDE - SPACE,
                        longitude: LONGITUDE - SPACE,
                    }}
                    centerOffset={{x: -42, y: -60}}
                    anchor={{x: 0.84, y: 1}}
                    image={flagPinkImg}/>
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});

export default Map;