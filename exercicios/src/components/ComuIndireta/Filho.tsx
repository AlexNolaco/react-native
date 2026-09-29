/*comunicacao indireta usa callback passando do pai pro filho, e o filho chama o callback (funcao do pai)*/
import React from 'react'
import { Button } from 'react-native'

export default (props: any) => {

    function gerarNumero(min: number, max: number) {
        const fator = max - min + 1
        return Math.floor(Math.random() * fator) + min
    }

    return (
        <Button
            title="Executar"
            onPress={
                function () {
                    const n = gerarNumero(props.min, props.max)
                    props.funcao(n, "O valor gerado foi: ") /*aqui eu executo a funcao do pai, passando os parametros que ele espera */
                }
            }
        />
    )
}