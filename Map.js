import MapView from 'react-native-maps';

import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 6.833140;
const LONGITUDE = 79.882270;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
class Map extends Component {

    constructor() {
        super();
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: []
        };
    }

    onMapPress(e) {
        this.setState({
            markers: [
                ...this.state.markers,   // previous markers
                {                        // new marker
                    coordinate: e.nativeEvent.coordinate,
                    key: id++,
                    color: randomColor(),
                },
            ],
        });
        console.log(this.state.markers);
    }

    onRegionChange(region) {
        this.setState({region});
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={ styles.map }
                    region={this.state.region}
                    onRegionChange={region => this.onRegionChange(region)}
                    onPress={(e) => this.onMapPress(e)}>

                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            key={marker.key}
                            coordinate={marker.coordinate}
                            pinColor={marker.color}
                        />
                    ))}
                </MapView>

                <View style={styles.buttonContainer}>
                    <View style={styles.bubble}>
                        <Text>Tap to create a marker of random color</Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        backgroundColor: 'transparent',
    }
});

export default Map;