import React, { Component } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CircularProgress from '@material-ui/core/CircularProgress'

import firebase from 'firebase'
import firebaseConfig from '../firebaseConfig'
firebase.initializeApp(firebaseConfig)
var database = firebase.database()

export default class Labs extends Component {

    state = {
        itens: [],
        loading: true,
    }

    componentWillMount(){
        database.ref('/labs').on('value', (snapshot) => {
            console.log(snapshot.val())
            this.setState({ itens: snapshot.val(), loading: false })
        }, err => console.log(err))
    }

    renderList(){
        return this.state.itens.map(item => 
            <ListItem divider key={item.sigla} button href="#">
                <ListItemText primary={item.sigla} secondary={item.nome+' - '+item.unidade_de_ensino+'/USP'} />
            </ListItem>
        )
    }

    render(){
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
                <div className="list">
                    <List component="nav">
                        {!this.state.loading && this.renderList()}
                    </List>
                </div>
            </div>
        )
    }
}
