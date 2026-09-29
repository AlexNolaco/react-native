import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Estilo from '../estilo'

export default (props:any) => {
    return (
        <View style={style.Display}>
            /*quando quer usar mais de um estilo coloca em colchetes*/
            <Text style={[Estilo.txtG, style.DisplayText]}> 
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF'
    }
})