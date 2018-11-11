import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import { TextField, Button } from '@material-ui/core';

import firebase from 'firebase'
import firebaseConfig from '../firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log("usuario logado: ");
    } else {
        console.log("usuario deslogado");
    }
});

const styles = {
    card: {
        width: 300,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        marginTop: 100,
    },
    button: {
        marginTop: 20,
    },
    link: {
        textDecoration: 'none', 
        color: '#FFF',
    },
}

export default class Cadastro extends Component {

    state = {
        nome: '',
        email: '',
        password: '',
        password_confirm: '',
        authenticated: false
    }

    handleRegister = () => {

        if (this.state.password !== this.state.password_confirm) {
            alert("Senhas distintas!");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            console.log(errorCode + ' ' + errorMessage);
        });
        
    }


    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={styles.card}>
                <TextField
                    id="nome-input"
                    label="Nome"
                    placeholder="Digite o nome da empresa"
                    margin="normal"
                    value={this.state.nome}
                    onChange={newValue => this.setState({ nome: newValue.target.value })}
                />
                <TextField
                    id="email-input"
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    margin="normal"
                    value={this.state.email}
                    onChange={newValue => this.setState({ email: newValue.target.value })}
                />
                <TextField
                    id="password-input"
                    label="Senha"
                    type="password"
                    margin="normal"
                    value={this.state.password}
                    onChange={newValue => this.setState({ password: newValue.target.value })}
                />

                <TextField
                    id="password-confirm-input"
                    label="Confirmar senha"
                    type="password"
                    margin="normal"
                    value={this.state.password_confirm}
                    onChange={newValue => this.setState({ password_confirm: newValue.target.value })}
                />
                
                <Button style={styles.button} variant="contained" size="small" color="primary" onClick={this.handleRegister}>
                    <span>Registrar</span>
                </Button>
                

            </Card>

            </div>
        )
    }
}
