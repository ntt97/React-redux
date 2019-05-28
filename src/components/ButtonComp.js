import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'

const ButtonComp = ({onPress,title,color,bgColor})=>(
    <TouchableOpacity onPress={onPress} >        
        <View style={{ backgroundColor: bgColor,marginBottom:10,padding:15}}>
            <Text style={{ color,textAlign:"center",fontSize:20,fontWeight:"300" }}>{title}</Text>
        </View>
    </TouchableOpacity>
)
export default ButtonComp