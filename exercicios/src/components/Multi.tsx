import React from 'react'
import { Text, View } from 'react-native'
import estilo from './estilo'

function Comp() {
    return <Text style={estilo.txtG}></Text>
}

function Comp1() {
    return <Text style={estilo.txtG}>Comp1</Text>
}

function Comp2() {
    return <Text style={estilo.txtG}>Comps2</Text>
}

export { Comp, Comp1, Comp2 }