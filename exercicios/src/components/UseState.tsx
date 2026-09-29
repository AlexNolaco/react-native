import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({ inicial = 0, passo = 1 }) => {
    /*Use state é um hook do react ou seja, um gancho, que permite você alterar o estado da aplicação
    nesse caso ele faz a função do two way binding igual no angular*/

    const [numero, setNumero] = useState(inicial) //se quiser dá um ctrl click nesse use state.
    // ao fazer o destructing, o primeiro elemento do array é a variável que vai armazenar o valor, 
    // e o segundo elemento é a função que vai alterar esse valor.
    //porem ao invocar o useState, só se passa o valor inicial, 
    // e o react vai cuidar de armazenar o valor e depois você invoca o setNumero que é a função
    // que vai alterar o valor da variavel em tela


    const inc = () => setNumero(numero + 1 + passo)
    const dec = () => setNumero(numero - 1 - passo)

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )
}