import React, { Component } from 'react'
import { View,Text } from 'react-native'
import{connect} from 'react-redux'

 class Child extends Component{
   
    render(){
        const {counter} = this.props
        return(
            <View>
                <Text style={{fontSize:100,color:"#000"}}>{counter}</Text>
            </View>
        )
    }
}
const mapStateToProps =state=>{
    
    return{
        counter:state.counterReducer
    }
}
export default connect(mapStateToProps,null)(Child)