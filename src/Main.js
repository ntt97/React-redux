import React, { Component } from 'react'
import { View } from 'react-native'
import Child from './components/Child'
import ButtonComp from './components/ButtonComp'

import {connect} from 'react-redux'
import { counterIncrease, counterDecrease } from './actions';

  class Main extends Component {
    onIncrease = () => {
        this.props.increase()
    }
    onDecrease = () => {
        this.props.decrease()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1,justifyContent:"center",alignItems:"center" }}>
                    <Child />
                </View>
                <View style={{ flex: 1, padding:20 }}>
                    <ButtonComp
                        title="Increase"
                        color="#fff"
                        onPress={this.onIncrease}
                        bgColor="blue"
                    />
                    <ButtonComp
                        title="Decrease"
                        color="#fff"
                        onPress={this.onDecrease}
                        bgColor="#000"
                    />

                </View>

            </View>
        )
    }
}
const mapDispatchToProps =dispatch =>{
    
    return{
        increase:()=>dispatch(counterIncrease()),
        decrease:()=>dispatch(counterDecrease())
    }
}
export default connect(null,mapDispatchToProps)(Main)