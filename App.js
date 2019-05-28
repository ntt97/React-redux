

import React, { Component } from 'react';
import {  View } from 'react-native';
import Main from './src/Main'
import store from './src/store'
import {Provider} from 'react-redux'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                    <Main />
                </View>
            </Provider>
                
            
    );
    }
}

