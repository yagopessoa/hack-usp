import React, { Component } from 'react'

import { Link } from 'react-router-dom'

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
        height: 300,
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

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        authenticated: false
    }

    handleLogin = () => {

        auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode && errorMessage) {
                console.log(errorCode + ": " + errorMessage);
            }
        });
        
    }


    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={styles.card}>
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
                <Button style={styles.button} variant="contained" size="small" color="primary" onClick={this.handleLogin}>
                    <span>Entrar</span>
                </Button>
                
                <Link style={styles.link} to = "/cadastro">
                    <Button style={styles.button} variant="contained" size="small" color="primary" onClick={this.handleLogin}>
                        <span>Registrar</span>
                    </Button>
                </Link>

            </Card>

            </div>
        )
    }
}
