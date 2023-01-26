import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Globals from './src/data/Globals.js';
import * as Network from './src/functions/NetworkFunctions.js';
import MapScreen from './src/views/MapScreen.js';
import ForcesScreen from './src/views/ForcesScreen.js';
import ApplicationGuideScreen from './src/views/ApplicationGuideScreen.js';

import FilterModal from './src/components/FilterModal.js';

//const MainStack = createNativeStackNavigator();
const BottomNavigation = createBottomTabNavigator();

export default function App() {
  // Takes too long //
  Globals.ForceNames = [];
  Globals.SpecificForces = [];
  Network.ForcesPoliceAPITest().then((results) => {
    for (let i = 0; i < results.length; i++) {
        Network.SpecificForcePoliceAPITest(results[i].id).then((results) => {
            Globals.SpecificForces.push(results);
            Globals.ForceNames.push({label: results.name, value: results.name, key: i});
        })
    }
  })

  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <BottomNavigation.Navigator initialRouteName={"Map"} screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#000000",
                tabBarStyle: {backgroundColor: "#00738b"},
                headerStyle: {backgroundColor: "#00738b",},
                headerTitleStyle: {color: "#ffffff", textTransform: "none"},
                headerTitleAlign: "left",
                headerTintColor: "#000000",
                headerShadowVisible: true,
            })}>
                <BottomNavigation.Screen name="Map" component={MapScreen} options={{
                    title: "Map",
//                    headerTitle: "Map Screen",
                    tabBarIcon: () => {return (
                        <Ionicons name={"map-outline"} size={25} color={"#ffffff"} />
                    )},
                    headerRight: () => {return (
                        <TouchableOpacity onPress={() => {Globals.FilterModal.showModal()}} >
                            <Ionicons name={"filter-outline"} size={30} style={{marginRight: 10}} color={"#ffffff"} />
                        </TouchableOpacity>
                    )}
                }}/>
                <BottomNavigation.Screen name="Forces" component={ForcesScreen} options={{
                    title: "Forces",
                    tabBarIcon: () => {return (
                        <MaterialIcons name={"local-police"} size={25} color={"#ffffff"} />
                    )},
                }}/>
                <BottomNavigation.Screen name="ApplicationGuide" component={ApplicationGuideScreen} options={{
                    title: "Guide",
                    tabBarIcon: () => {return (
                        <MaterialCommunityIcons name={"help-circle-outline"} size={25} color={"#ffffff"} />
                    )},
                }}/>
            </BottomNavigation.Navigator>
            <FilterModal />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
