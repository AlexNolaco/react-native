import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Estilo from '../estilo'

export default (props:any) => {
 return (
        <View style={style.Botoes}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row" //coloca eles em formato de linha, se nao eles ficam um acima do outro
    }
})