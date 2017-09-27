/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View
} from 'react-native';

class teste_app3 extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      escolhaUsuario: "", 
      escolhaComputador: "", 
      resultado: "",
      vitoriasUsuario: 0,
      vitoriasComputador: 0,
      empates: 0
    };
  }

  jokenPo( escolhaUsuario ){
    var numeroAleatorio = Math.floor( Math.random() * 3 );

    var escolhaComputador = ['pedra', 'papel', 'tesoura'];

    var resultado = "";
    if( escolhaComputador[numeroAleatorio] == "pedra" ){
      if( escolhaUsuario == "pedra" ){
        escolha = "empate.";
        let empates = this.state.empates + 1;
        this.setState({ empates });
      } else if( escolhaUsuario == "papel" ){
        escolha = "usuário ganhou.";
        let vitoriasUsuario = this.state.vitoriasUsuario + 1;
        this.setState({ vitoriasUsuario });
      } else {
        escolha = "usuário perdeu.";
        let vitoriasComputador = this.state.vitoriasComputador + 1;
        this.setState({ vitoriasComputador });
      }
    }

    if( escolhaComputador[numeroAleatorio] == "papel" ){
      if( escolhaUsuario == "papel" ){
        escolha = "empate.";
        let empates = this.state.empates + 1;
        this.setState({ empates });
      } else if( escolhaUsuario == "tesoura" ){
        escolha = "usuário ganhou.";
        let vitoriasUsuario = this.state.vitoriasUsuario + 1;
        this.setState({ vitoriasUsuario });
      } else {
        escolha = "usuário perdeu.";
        let vitoriasComputador = this.state.vitoriasComputador + 1;
        this.setState({ vitoriasComputador });
      }
    }

    if( escolhaComputador[numeroAleatorio] == "tesoura" ){
      if( escolhaUsuario == "tesoura" ){
        escolha = "empate.";
        let empates = this.state.empates + 1;
        this.setState({ empates });
      } else if( escolhaUsuario == "pedra" ){
        escolha = "usuário ganhou.";
        let vitoriasUsuario = this.state.vitoriasUsuario + 1;
        this.setState({ vitoriasUsuario });
      } else {
        escolha = "usuário perdeu.";
        let vitoriasComputador = this.state.vitoriasComputador + 1;
        this.setState({ vitoriasComputador });
      }
    }

    this.setState({
      escolhaUsuario : escolhaUsuario,
      escolhaComputador : escolhaComputador[numeroAleatorio],
      resultado: escolha
    });
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador: { this.state.escolhaComputador }</Text>
        <Text>Escolha do usuário: { this.state.escolhaUsuario }</Text>
        <Text>Resultado: { this.state.resultado }</Text>
        <Button title="pedra" onPress= { () => { this.jokenPo('pedra') } } />
        <Button title="papel" onPress={ () => { this.jokenPo('papel') } } />
        <Button title="tesoura" onPress={ () => { this.jokenPo('tesoura') } } />
        <Text>Placar: </Text>
        <Text>Vitórias usuário: { this.state.vitoriasUsuario }</Text>
        <Text>Vitórias computador: { this.state.vitoriasComputador }</Text>
        <Text>Empates: { this.state.empates }</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('teste_app3', () => teste_app3);
