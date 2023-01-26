import React, { Component } from 'react';
import Globals from '../data/Globals.js';

import GetLocation from 'react-native-get-location';

export function getUserLocation() {
    new Promise((resolve, reject) => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then((location) => {
             var r = {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
             }
             console.log("R: (" + JSON.stringify(r) + ")")

             resolve(r);
        }).catch(error => {
         const { code, message } = error;
         console.warn(code, message);
        });
    });
}