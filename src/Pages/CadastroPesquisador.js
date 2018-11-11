import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import { TextField, Button, Checkbox } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

export default class CadastroPesquisador extends Component {

    state = {
        sigla: '',
        nome: '',
        area: '',
        filtros: [],
        unidade: '',
        email: '',
        password: '',
        password_confirm: '',
        loading: true,
        showFiltros: false,
        authenticated: false,
        bd: false,
        graf: false,
        aprend: false,
        ia: false,
        sisd: false,
        robo: false,
        redes: false,
        engsoft: false,
        sisweb: false,
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

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

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
                    id="sigla-input"
                    label="Sigla"
                    placeholder="Digite a sigla do laboratório"
                    margin="normal"
                    value={this.state.sigla}
                    onChange={newValue => this.setState({ sigla: newValue.target.value })}
                />
                <TextField
                    id="nome-input"
                    label="Nome"
                    placeholder="Digite o nome do laboratório"
                    margin="normal"
                    value={this.state.nome}
                    onChange={newValue => this.setState({ nome: newValue.target.value })}
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
                        <Checkbox onChange={event => this.setState({bd: event.target.checked})} checked={this.state.bd}/>
                        Bases de Dados
                    </div>
                </div>

                <form className={this.state.root} autoComplete="off">
                    <FormControl className={this.state.formControl}>
                    <InputLabel htmlFor="text">Unidade</InputLabel>
                    <Select
                        margin="normal"
                        value={this.state.unidade}
                        onChange={this.handleChange}
                        inputProps={{
                        name: 'unidade',
                        id: 'unidade-simple',
                        }}
                        style={{width: 180}}
                    >
                        <MenuItem value="">
                        <em></em>
                        </MenuItem>
                        <MenuItem value="ICMC">ICMC</MenuItem>
                        <MenuItem value="IME">IME</MenuItem>
                        <MenuItem value="EACH">EACH</MenuItem>
                        <MenuItem value="EP">EP</MenuItem>
                        <MenuItem value="EESC">EESC</MenuItem>
                        <MenuItem value="FFCLRP">FFCLRP</MenuItem>
                    </Select>
                    </FormControl>
                </form>

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
