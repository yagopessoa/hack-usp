import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox } from '@material-ui/core';

import firebase from 'firebase'
import firebaseConfig from '../firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var database = firebase.database();
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
        height: 'auto',
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
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    formControl: {
        minWidth: 120,
    },
}

export default class Cadastro extends Component {

    state = {
        nome: '',
        email: '',
        password: '',
        password_confirm: '',
        authenticated: false, 
        showFiltros: false,
        bd: false, 
        graf: false, 
        ia: false,
        aprend: false,
        sisdis: false,
        robo: false,
        sisweb: false,
        redes: false,
        engsoft: false,
    }

    handleRegister = () => {

        if (this.state.password !== this.state.password_confirm) {
            alert("Senhas distintas!");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            var emp = database.ref('/empresa').push();
            console.log("entra bb")
            emp.set({area: this.state.area, email: this.state.email, nome: this.state.nome})
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            console.log(errorCode + ' ' + errorMessage);
        });
        
    }

    handleAChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        
        if (event.target.value === 'comp') {
            this.setState({showFiltros: true});
        } else {
            this.setState({showFiltros: false});
        }
    };

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
                <form className={this.state.root} autoComplete="off">
                    <FormControl className={this.state.formControl}>
                    <InputLabel htmlFor="text">Área</InputLabel>
                    <Select
                        margin="normal"
                        value={this.state.area}
                        onChange={this.handleAChange}
                        inputProps={{
                        name: 'area',
                        id: 'area-simple',
                        }}
                        style={{width: 180}}
                    >
                        <MenuItem value="">
                        <em></em>
                        </MenuItem>
                        <MenuItem value="comp">Computação</MenuItem>
                    </Select>
                    </FormControl>
                </form>
                <div className='check-boxes' style={this.state.showFiltros ? {display: 'block'} : {display: 'none'}}>
                    <div>
                        <Checkbox onChange={event => this.setState({bd: event.target.checked})} checked={this.state.bd}/>
                        Bases de Dados
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({graf: event.target.checked})} checked={this.state.graf}/>
                        Computação Gráfica
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({aprend: event.target.checked})} checked={this.state.aprend}/>
                        Aprendizado de Máquina
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({ia: event.target.checked})} checked={this.state.ia}/>
                        Inteligência Artificial
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({sisd: event.target.checked})} checked={this.state.sisd}/>
                        Sistemas Distribuídos
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({robo: event.target.checked})} checked={this.state.robo}/>
                        Robótica Móvel
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({engsoft: event.target.checked})} checked={this.state.engsoft}/>
                        Engeharia de Software
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({sisweb: event.target.checked})} checked={this.state.sisweb}/>
                        Sistemas Web
                    </div>
                    <div>
                        <Checkbox onChange={event => this.setState({redes: event.target.checked})} checked={this.state.redes}/>
                        Redes
                    </div>
                </div>
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
