/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';//PORTA DE ENTRADA, ARQUIVO PRINCIPAL, REFERENCIA O APP.TSX DENTRO DE SRC
import { name as appName } from './app.json'; //NOME DO APLICATIVO QUE BUSCA DO PACKAGE.JSON

AppRegistry.registerComponent(appName, () => App);
