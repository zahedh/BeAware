import React, { Component } from 'react';
import Globals from '../data/Globals.js';

let StreetLevelCrimesURI = "https://data.police.uk/api/crimes-street/all-crime?";
let StreetLevelOutcomesURI = "";
let CrimesAtLocationURI = "https://data.police.uk/api/outcomes-at-location?";
let CrimeWithNoLocationURI = "https://data.police.uk/api/crimes-no-location?";
let CrimeCategoriesURI = "https://data.police.uk/api/crime-categories?";
let ForcesURI = "https://data.police.uk/api/forces";


export async function StreetLevelSpecificPoliceAPITest(latitude, longitude, date) {
    try {
        let response = await fetch(StreetLevelCrimesURI + "lat=" + latitude + "&lng=" + longitude + "&date=" + date, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        let responseJson = await response.json();

        console.log("Response from StreetLevelSpecific Test: (" + JSON.stringify(responseJson) + ")");

        return responseJson;
    } catch (error) {
        console.error("StreetLevelSpecificPoliceAPITest failed. Reason for failure: (" + error + ")");
    }
}

export async function StreetLevelCustomAreaPoliceAPITest(poly, date) {
    try {
        console.log("Started. Poly entered: (" + poly + ")");
        let response = await fetch(StreetLevelCrimesURI + "poly=" + poly + "&date=" + date, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        console.log("Response before json: (" + JSON.stringify(response) + ")");

        let responseJson = await response.json();

        console.log("Response from StreetLevelCustom Test: (" + JSON.stringify(responseJson) + ")");

        return responseJson;
    } catch (error) {
        console.error("StreetLevelCustomPoliceAPITest failed. Reason for failure: (" + error + ")");
    }
}

export async function ForcesPoliceAPITest() {
    try {
        let response = await fetch(ForcesURI, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        let responseJson = await response.json();

//        console.log("Response from Forces Test: (" + JSON.stringify(responseJson) + ")");

        return responseJson;
    } catch (error) {
        console.error("ForcesPoliceAPITest failed. Reason for failure: (" + error + ")");
    }
}

export async function SpecificForcePoliceAPITest(Force) {
    try {
        let response = await fetch(ForcesURI + "/" + Force, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        let responseJson = await response.json();

//        console.log("Response from Forces Test: (" + JSON.stringify(responseJson) + ")");

        return responseJson;
    } catch (error) {
        console.error("ForcesPoliceAPITest failed. Reason for failure: (" + error + ")");
    }
}

export async function CrimeCategoriesPoliceAPITest(Date) {
    try {
        let response = await fetch(CrimeCategoriesURI + "date=" + Date, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        let responseJson = await response.json();

        console.log("Response from Forces Test: (" + JSON.stringify(responseJson) + ")");

        return responseJson;
    } catch (error) {
        console.error("ForcesPoliceAPITest failed. Reason for failure: (" + error + ")");
    }
}