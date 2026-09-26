import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default (param: any) => {
    console.warn(param)
    const {min, max} = param
    const delta =  max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    
    return (
        <Text style={estilo.txtG}>
            O Valor Aleatório é {aleatorio} 
        </Text>
    )
}

