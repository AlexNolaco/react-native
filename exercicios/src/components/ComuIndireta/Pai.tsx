import React, { useState } from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import estilo from '../estilo'

/*comunicacao indireta usa callback passando do pai pro filho, e o filho chama o callback (funcao do pai)*/

export default (props: any) => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero: any, texto: any) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={estilo.txtG}>
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor} /*callback aqui eu passo a funcao pro filho, lá ele executa */
            />
        </>
    )
}