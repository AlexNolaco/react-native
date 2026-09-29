import React from 'react'
import Filho from './Filho'

/*comunicacao direta usa props, de um componente pai para um componente filho
 porque o componente pai tem uma instancia direta do componente filho, por isso é chamado assim.
 é o jeito mais comum de se comunicar entre componentes, mas não é o unico.
*/
export default (props: any)  => {
    let x = 13
    let y = 100
    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
        </>
    )
}