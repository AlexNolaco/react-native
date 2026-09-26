import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default (param: any) => {
    console.warn(param)
    return (
        <Text style={estilo.txtG}>
            O Valor {param.max} é maior que o valor de Y {param.min}
        </Text>
    )
}

