import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
/*
import Aleatorio from './components/Aleatorio'
import Primeiro from './components/First'
import {Comp, Comp1, Comp2} from './components/Multi'
import MinMax from './components/MinMax'
import Titulo from './components/Titulo' //exemplo de uso de fragment em react
import Botao from './components/Botao'
import Contador from './components/UseState'
import Pai from './components/ComuDireta/Pai'
import Pail from './components/ComuIndireta/Pai'
*/
import ContadorV2 from './components/ContadorV2/Contador'

//não estranhe, essa é a sintaxe do jsx...
//JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript que permite escrever código parecido com HTML/XML dentro do seu JavaScript.
function App() {
  return <View style={style.App}> 
    <ContadorV2/>
  </View> 
  
  /*
  console.warn("abrir dev tools") //abre o modo desenvolvedor pra depuração
  return <View style={style.App}>
    <Pai/>
    <Contador inicial={100} passo={13}/>
    <Contador/>
    <Botao/>
    <Titulo principal="Cadastro" secundario="Tela de cadastro do produto"/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={3} max={4}/>
    <Aleatorio min={3} max={96}/>
    <MinMax min={1} max={2}/>
    <MinMax min={3} max={4}/>
    <Comp/>
    <Comp1/>
    <Comp2/>
    <Text> {1 * 2 }</Text>
    <Primeiro/>
  </View> 
  */
}

export default App


// assim que se cria o "css" do aplicativo, note que la em cima fiz referencia a ele
const style = StyleSheet.create({
  App: {
    backgroundColor: 'rgb(215, 211, 229)',
    flexGrow: 1, /* pode ser flex, faz com que ocupe a tela inteira */
    justifyContent: "center", /* alinha no centro da tela na vertical */
    alignItems: "center", /*alinha no centro na horizontal*/
    padding: 20
  }
})