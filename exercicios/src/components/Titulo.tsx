import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default (props: any) => (
    // retornar mais de um elemento use uma view ou fragment, 1 elemento só nao precisa 
    //voce sempre precisa colocar o view antes de exportar mais de um text ou componet se não dá erro
    /*<View>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </View>
    */

    // pra não dar erro pode colocar dentro do fragment
    /*<React.Fragment>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>*/

    // ou pra simplificar pode colocar dentro disso, mas muda o import la em cima
    /*    <Fragment>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </Fragment>
    */
    
    //ou pra nao passar nada, mas mesmo assim usar fragment use
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>

)