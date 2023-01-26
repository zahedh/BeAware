import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Globals from '../data/Globals.js';
import RNPickerSelect from "react-native-picker-select";
import customForcesPickerStyles from "../styles/customForcesPickerStyles.js";
import forcesScreenStyles from "../styles/forcesScreenStyles.js";

export default class ForcesScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            Forces: Globals.SpecificForces,
            force: {label: "Force", value: ""},
            telephone: "",
            website: ""
        }
    };


    componentDidMount() {
        Globals.ForcesScreen = this;
//        console.log("Forces: (" + JSON.stringify(Globals.SpecificForces) + ")")
    }

    renderForces() {
//        console.log("Forces in State: (" + JSON.stringify(this.state.Forces) + ")");
        return(
            this.state.Forces.map((force, index) => {
                return(
                    <Text key={index}>{force.name}</Text>
                );
            })
        )
    }

    changeForce(input) {
        this.setState({force: input}, () => {
            console.log("Force: " + JSON.stringify(Globals.SpecificForces[0]));
            console.log("Selected: " + JSON.stringify(this.state.force));


            for (let i = 0; i < Globals.SpecificForces.length; i++) {
                if (Globals.SpecificForces[i].name == input) {
                    console.log("Validated")
                    this.setState({
                        telephone: Globals.SpecificForces[i].telephone,
                        website: Globals.SpecificForces[i].url
                    });
                }
            }
        });
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center"}}>

                    <View style={forcesScreenStyles.card}>
                    <Text style={forcesScreenStyles.titleText}>Force Details</Text>
                    <View style={forcesScreenStyles.inputRow}>
                        <Text style={forcesScreenStyles.labelText}>Force Selector:</Text>
                        <RNPickerSelect
                           style={customForcesPickerStyles}
                           items={Globals.ForceNames}
                           onValueChange={(value) => this.changeForce(value)}
                           useNativeAndroidPickerStyle={false}
                           placeholder={{label: "Select", value: ""}}
                         />
                    </View>
                    <View style={forcesScreenStyles.inputRow}>
                        <Text style={forcesScreenStyles.labelText}>Force Telephone:</Text>
                        <Text style={forcesScreenStyles.dataText}>{this.state.telephone}</Text>
                    </View>
                    <View style={forcesScreenStyles.inputRow}>
                        <Text style={forcesScreenStyles.labelText}>Force Website:</Text>
                        <Text style={forcesScreenStyles.dataText} onPress={() => Linking.openURL(this.state.website)}>{this.state.website}</Text>
                    </View>
                    </View>

            </SafeAreaView>
        )
    }
}