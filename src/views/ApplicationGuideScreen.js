import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Globals from '../data/Globals.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ApplicationGuideScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
        };
        this.myRef = React.createRef();
    }

    componentDidMount() {
        Globals.ApplicationGuideScreen = this;
    }


    render() {
        return (
            <SafeAreaView style={{flex: 1, alignItems: "center", padding: 20}}>
            <ScrollView>
                <View style={{marginBottom: 25}}>
                    <Text style={{textAlign: "center", color: "black", fontSize: 14}}>Welcome to Beaware. This application aims at increasing the awareness of crime/policing data in England. There are two primary pieces of functionality provided and they are elaborated below.</Text>
                </View>
                <View style={{flexDirection: "row", width: "100%", alignSelf: "flex-start", alignItems: "center", marginBottom: 15}}>
                    <Ionicons name={"map-outline"} size={30} color={"#000000"} style={{marginRight: 15}}/>
                    <Text style={{textAlign: "left", color: "black", fontSize: 14}}>FIND CRIMES BY MAP</Text>
                </View>
                <View style={{width: "100%", marginBottom: 30}}>
                    <Text style={{textAlign: "left", color: "black", fontSize: 12}}>This functionality can be accessed by selecting the Map button the bottom navigation bar. Once navigated, you will be presented with a fully functional instance of Google Maps. When the map is moved, crimes based on the latitude/longitude coordinates of your screen will be used to search for crimes.</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={{textAlign: "left", color: "black", fontSize: 12}}>Each crime will be presented in the form of a red map marker. If touched, the category of crime and a rough location will be displayed. In the top header bar, there is a filter icon in the top right corner. If selected, a pop-up will display allowing you to change the year and month of crimes to search for in the map.</Text>
                </View>
                <View style={{flexDirection: "row", width: "100%", alignSelf: "flex-start",alignItems: "center", marginBottom: 15}}>
                    <MaterialIcons name={"local-police"} size={30} color={"#000000"} style={{marginRight: 15}}/>
                    <Text style={{textAlign: "left", color: "black", fontSize: 14}}>POLICE FORCE INFORMATION</Text>
                </View>
                <View style={{width: "100%", marginBottom: 30}}>
                    <Text style={{textAlign: "left", color: "black", fontSize: 12}}>This functionality can be accessed by selecting the Forces button the bottom navigation bar. Once navigated, you will be presented with a container intended to display specific information about police forces.</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={{textAlign: "left", color: "black", fontSize: 12}}>To select a police force, interact with the force selector dropdown. Once a force is selected, its telephone number and website will be displayed. The website link can be clicked to navigate your device immediately.</Text>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}