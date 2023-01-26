import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Globals from '../data/Globals.js';

import * as MapFunctions from '../functions/MapFunctions.js';
import * as Network from '../functions/NetworkFunctions.js';

import MapView, {Marker, Circle, Callout, Heatmap, PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location'

export default class MapScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            CrimeMarkers: [{coordinate: {latitude: 10, longitude: 10}}],
        };

        this.myRef = React.createRef();
    }

    componentDidMount() {
        Globals.MapScreen = this;
    }

    navigateToUserLocation() {
         GetLocation.getCurrentPosition({
             enableHighAccuracy: true,
             timeout: 15000,
         })
         .then(location => {
             var r = {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
             }

             this.map.animateToRegion(r, 0);
         })
         .catch(error => {
             const { code, message } = error;
             console.warn(code, message);
         })
    }

    createCrimeMarkers(currentRegion) {
        if (Globals.RegionChangeHalter != true) {
            let Markers = [];
            let boundaries = this.map.getMapBoundaries().then((boundaries) => {
               console.log("Boundaries: (" + JSON.stringify(boundaries) + ")");

               let southWest = boundaries.southWest.latitude.toString() + "," + boundaries.southWest.longitude.toString();
               let southEast = (currentRegion.latitude + (currentRegion.latitudeDelta/2)) + "," + (currentRegion.longitude-(currentRegion.longitudeDelta/2));
               let northEast = boundaries.northEast.latitude.toString() + "," + boundaries.northEast.longitude.toString();
               let northWest = currentRegion.latitude-(currentRegion.latitudeDelta/2) + "," + currentRegion.longitude+(currentRegion.longitudeDelta/2);
               let center = currentRegion.latitude +  "," + currentRegion.longitude;

               console.log("currentRegion: (" + JSON.stringify(currentRegion) + ")")
               console.log("southEast: (" + southEast)


               let polyParameter = northWest + ":" + southEast + ":" + southWest + ":" + northEast + ":" + center + ":" + southEast + ":" + southWest;

               Network.StreetLevelCustomAreaPoliceAPITest(polyParameter, (Globals.mapYear + "-" + Globals.mapMonth)).then((results) => {
                   Globals.Crimes = results;
//               console.log("Got this far. Here are the results: (" + results + ")");
                   new Promise((resolve, reject) => {
                       for (let i = 0; i < results.length; i++) {
                           let Marker = {
                               coordinate: {
                                   latitude: parseFloat(results[i].location.latitude),
                                   longitude: parseFloat(results[i].location.longitude),
                               },
                               description: results[i].month + " - " + results[i].category + "\n" + results[i].location.street.name,
                               id: i
//                               latitude: parseFloat(results[i].location.latitude),
//                               longitude: parseFloat(results[i].location.longitude),
//                               weight: 30
                           };
                           Markers.push(Marker);
                       }
                       resolve(true);
                   })
                   .then(() => {
                       this.setState({CrimeMarkers: Markers});
        //             console.log("Markers State Value: (" + JSON.stringify(this.state.CrimeMarkers) + ")")
                   })
                   .catch((error) => {
                       console.error("createCrimeMarkers failed. Reason for failure: (" + error + ")");
                   })
               });
            });
        } else {
            Globals.RegionChangeHalter = false;
        }
    }

    render() {
        var mapStyle = [
                         {
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#ebe3cd"
                             }
                           ]
                         },
                         {
                           "elementType": "labels.text.fill",
                           "stylers": [
                             {
                               "color": "#523735"
                             }
                           ]
                         },
                         {
                           "elementType": "labels.text.stroke",
                           "stylers": [
                             {
                               "color": "#f5f1e6"
                             }
                           ]
                         },
                         {
                           "featureType": "administrative",
                           "elementType": "geometry.stroke",
                           "stylers": [
                             {
                               "color": "#c9b2a6"
                             }
                           ]
                         },
                         {
                           "featureType": "administrative.land_parcel",
                           "elementType": "geometry.stroke",
                           "stylers": [
                             {
                               "color": "#dcd2be"
                             }
                           ]
                         },
                         {
                           "featureType": "administrative.land_parcel",
                           "elementType": "labels.text.fill",
                           "stylers": [
                             {
                               "color": "#ae9e90"
                             }
                           ]
                         },
                         {
                           "featureType": "landscape.natural",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#dfd2ae"
                             }
                           ]
                         },
                         {
                           "featureType": "poi",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#dfd2ae"
                             }
                           ]
                         },
                         {
                           "featureType": "poi",
                           "elementType": "labels.text.fill",
                           "stylers": [
                             {
                               "color": "#93817c"
                             }
                           ]
                         },
                         {
                           "featureType": "poi.park",
                           "elementType": "geometry.fill",
                           "stylers": [
                             {
                               "color": "#a5b076"
                             }
                           ]
                         },
                         {
                           "featureType": "poi.park",
                           "elementType": "labels.text.fill",
                           "stylers": [
                             {
                               "color": "#447530"
                             }
                           ]
                         },
                         {
                           "featureType": "road",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#f5f1e6"
                             }
                           ]
                         },
                         {
                           "featureType": "road.arterial",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#fdfcf8"
                             }
                           ]
                         },
                         {
                           "featureType": "road.highway",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#f8c967"
                             }
                           ]
                         },
                         {
                           "featureType": "road.highway",
                           "elementType": "geometry.stroke",
                           "stylers": [
                             {
                               "color": "#e9bc62"
                             }
                           ]
                         },
                         {
                           "featureType": "road.highway.controlled_access",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#e98d58"
                             }
                           ]
                         },
                         {
                           "featureType": "road.highway.controlled_access",
                           "elementType": "geometry.stroke",
                           "stylers": [
                             {
                               "color": "#db8555"
                             }
                           ]
                         },
                         {
                           "featureType": "road.local",
                           "elementType": "labels.text.fill",
                           "stylers": [
                             {
                               "color": "#806b63"
                             }
                           ]
                         },
                         {
                           "featureType": "transit.line",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#dfd2ae"
                             }
                           ]
                         },
                         {
                           "featureType": "transit.line",
                           "elementType": "labels.text.fill",
                           "stylers": [
                             {
                               "color": "#8f7d77"
                             }
                           ]
                         },
                         {
                           "featureType": "transit.line",
                           "elementType": "labels.text.stroke",
                           "stylers": [
                             {
                               "color": "#ebe3cd"
                             }
                           ]
                         },
                         {
                           "featureType": "transit.station",
                           "elementType": "geometry",
                           "stylers": [
                             {
                               "color": "#dfd2ae"
                             }
                           ]
                         },
                         {
                           "featureType": "water",
                           "elementType": "geometry.fill",
                           "stylers": [
                             {
                               "color": "#b9d3c2"
                             }
                           ]
                         },
                         {
                           "featureType": "water",
                           "elementType": "labels.text.fill",
                           "stylers": [
                             {
                               "color": "#92998d"
                             }
                           ]
                         }
                       ]
        return (
            <SafeAreaView style={{flex: 1, justifyContent: "space-between", alignItems: "center"}}>
                <MapView
//                  customMapStyle={mapStyle}
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  ref={(map) => { this.map = map; }}
                  style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}
                  showsUserLocation={true}
                  moveOnMarkerPress={false}
                  onMapReady={() => {this.navigateToUserLocation()}}
                  onRegionChangeComplete={(Region) => {this.createCrimeMarkers(Region)}}
                  >

                    {this.state.CrimeMarkers.map((marker, index) => (
                        <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        description={marker.description}
                        pinColor={"#6e0000"}
                        onPress={()=> {console.log("Marker pressed.")}}
                        >
                        <Callout onPress={() => {Globals.CalloutCoordinates = Region}} >
                            <View>
                                <Text>{marker.description}</Text>
                            </View>
                        </Callout>
                        </Marker>

                    ))}

{
//                        <Heatmap points={this.state.CrimeMarkers}
//                            radius={20}
//                        />
}
                </MapView>
            </SafeAreaView>
        )
    }
}