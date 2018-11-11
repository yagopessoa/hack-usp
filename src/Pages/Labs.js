import React, { Component } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import firebase from 'firebase'
import firebaseConfig from '../firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var database = firebase.database()

export default class Labs extends Component {

    state = {
        itens: [],
        loading: true,
        bd: false,
        graf: false,
        aprend: true,
        ia: false,
        sisd: false,
        robo: false,
        redes: false,
        engsoft: false,
        sisweb: false,
        cardTitle: '',
        cardDescript: '',
        open: false,
    }

    componentWillMount(){
        database.ref('/labs').on('value', (snapshot) => {
            console.log(snapshot.val())
            this.setState({ itens: snapshot.val(), loading: false })
        }, err => console.log(err))
    }

    renderList(){
        return this.state.itens.map(item => {
                var show = true
                const { bd, graf, aprend, ia, sisd, robo, redes, engsoft, sisweb } = this.state
                var thisHas, i

                if(bd){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Bases de Dados'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(graf){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Computação Gráfica'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(aprend){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Aprendizado de Máquina'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(ia){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Inteligência Artificial'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(sisd){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Sistemas Distribuídos'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(robo){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Robótica Móvel'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(redes){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Base de Dados'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(engsoft){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Base de Dados'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(bd){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Base de Dados'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }
                if(sisweb){
                    thisHas = false
                    for(i=0; i<item.filtros.length; i++){
                        if(item.filtros[i].nome === 'Sistemas Web'){
                            thisHas = true
                            break
                        }
                    }
                    if(!thisHas) show = false
                }

                if (!show) return <div key={item.sigla}></div>
                return (
                    <ListItem divider key={item.sigla} button onClick={() => this.setState({cardTitle: item.nome, cardDescript: 'E-mail: '+item.email, open: true})}>
                        <ListItemText primary={item.sigla} secondary={item.nome+' - '+item.unidade_de_ensino+'/USP'} />
                    </ListItem>
                )
            }
        )
    }

    render(){

        const { bd, graf, aprend, ia, sisd, robo, redes, engsoft, sisweb } = this.state

        return(
            <div style={{
                padding: 64,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div className="header-list">
                    <h2>Laboratórios Cadastrados</h2>
                </div>
                <div className="check-boxes">
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ bd: event.target.checked })} checked={bd} />
                        Bases de Dados
                    </div>
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ graf: event.target.checked })} checked={graf} />
                        Computação Gráfica
                    </div>
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ aprend: event.target.checked })} checked={aprend} />
                        Aprendizado de Máquina
                    </div>
                </div>
                <div className="check-boxes">
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ ia: event.target.checked })} checked={ia} />
                        Inteligêncial Artificial
                    </div>
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ sisd: event.target.checked })} checked={sisd} />
                        Sistemas Distribuídos
                    </div>
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ robo: event.target.checked })} checked={robo} />
                        Robótica Móvel
                    </div>
                </div>
                <div className="check-boxes">
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ redes: event.target.checked })} checked={redes} />
                        Redes
                    </div>
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ engsoft: event.target.checked })} checked={engsoft} />
                        Eng. Software
                    </div>
                    <div style={{flex: 1}}>
                        <Checkbox onChange={event => this.setState({ sisweb: event.target.checked })} checked={sisweb} />
                        Sistemas Web
                    </div>
                </div>
                <div className="list">
                    <List component="nav">
                        {!this.state.loading && this.renderList()}
                    </List>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={() => this.setState({open: false})}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                >
                    <DialogTitle id="dialog-title">{this.state.cardTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.state.cardDescript}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({open: false})} color="primary" autoFocus>
                            Entre em contato
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
