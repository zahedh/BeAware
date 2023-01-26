import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Globals from '../data/Globals.js';
import {Modal} from './customModal.js';
import filterModalStyles from '../styles/filterModalStyles.js';
import RNPickerSelect from "react-native-picker-select";
import customPickerStyles from "../styles/customPickerStyles.js";

export default class FilterModal extends Component {

    constructor (props) {
        super(props);
        this.state = {
            visible: false,
            year: {label: "2022", value: "2022"},
            month: {label: "January", value: "01"}
        };

    };


    componentDidMount() {
        Globals.FilterModal = this;
    }

    showModal() {
        this.setState({visible: true});
    }

    hideModal() {
        this.setState({visible: false});
    }

    changeYear(input) {
        this.setState({year: input});
        console.log("Year: " + input);
    }

    changeMonth(input) {
        this.setState({month: input});
        console.log("Month: " + input);
    }

    confirm() {
        Globals.mapYear = this.state.year
        Globals.mapMonth = this.state.month;
        this.hideModal();
    }


    render() {
        return (
            <Modal visible={this.state.visible} handle={this}>

                  <View style={filterModalStyles.modalView}>
                    <View style={filterModalStyles.TitleHolder}>
                      <Text style={filterModalStyles.modalTitleText}>
                        Filter Options
                      </Text>
                    </View>

                    <View style={filterModalStyles.inputRow}>
                        <Text style={filterModalStyles.text}>Year Selector:</Text>
                        <RNPickerSelect
                           style={customPickerStyles}
                           items={Globals.Years}
                           onValueChange={(value) => this.changeYear(value)}
                           useNativeAndroidPickerStyle={false}
                           value={this.state.year}
                           placeholder={{label: "Select", value: ""}}
                         />
                    </View>
                    <View style={filterModalStyles.inputRow}>
                        <Text style={filterModalStyles.text}>Month Selector:</Text>
                        <RNPickerSelect
                           style={customPickerStyles}
                           useNativeAndroidPickerStyle={false}
                           items={Globals.Months}
                           onValueChange={(value) => this.changeMonth(value)}
                           value={this.state.month}
                           useNativeAndroidPickerStyle={false}
                           placeholder={{label: "Select", value: ""}}
                         />
                    </View>

                    <View style={filterModalStyles.modalButtonView}>
                      <TouchableOpacity style={filterModalStyles.modalButton} activeOpacity={.5}  onPress={() => this.hideModal()}>
                        <Text style={filterModalStyles.modalButtonText}>
                          CANCEL
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={filterModalStyles.modalButton} activeOpacity={.5}  onPress={() => this.confirm()}>
                        <Text style={filterModalStyles.modalButtonText}>
                          CONFIRM
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

            </Modal>
        )
    }
}