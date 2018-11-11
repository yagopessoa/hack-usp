import React, { Component } from 'react'
import 'typeface-roboto'
import './App.css'

import MediaQuery from 'react-responsive'

import theme from './theme'
import { MuiThemeProvider, Typography, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import Menu from '@material-ui/icons/Menu'

import Sobre from './Pages/Sobre'
import Login from './Pages/Login'

import WorkStep from './Components/WorkStep'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

const styles = {
  root: {
    width: '100%',
    maxHeight: '100vh'
  },
  toolbar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icon: {
    marginRight: 8,
  },
  image: {
    height: '70%',
    padding: 16,
  },
  image2: {
    width: '70%',
    padding: 16,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
  },
  button: {
    marginTop: 32,
    padding: 20,
    fontSize: 25,
  },
  appBarButton: {
    marginLeft: 16,
  },
  link: {
    textDecoration: 'none', 
    color: '#FFF',
  }
}

const Home = () => 
<MuiThemeProvider theme={theme}>
  <div className="page-body">
    <div className="sub-title">
      <h1>
        Conecte-se com Laboratórios de Pesquisa e invista para potencializar seu negócio!
      </h1>
    </div>
    <div className="how-it-works">
      <div className="work-steps" >
        <WorkStep step='1' icon='check' text='Defina áreas de atuação' />
        <WorkStep step='2' icon='list' text='Confira a lista de laboratórios que mais combinam com sua empresa' />
        <WorkStep step='3' icon='send' text='Entre em contato para fechar a parceria' />
      </div>
      <Button style={styles.button} variant="contained" size="large" color="primary" >
        <span style={{color: '#FFF'}}>Começar</span>
      </Button>
    </div>
  </div>
</MuiThemeProvider>

class App extends Component {

  render() {
    return (
      <Router>
        <div><MuiThemeProvider theme={theme}>
          <div style={styles.root}>
            <AppBar color="primary" position="static">
              <Toolbar style={styles.toolbar}>
                <MediaQuery minWidth={1124}>
                  <div style={{flexGrow: 1}}>
                    <Typography style={{marginLeft: 32}} color="inherit" variant="title">
                      <Link style={styles.link} to="/">
                        USP Research
                      </Link>
                    </Typography>
                  </div>
                  <div>
                    <Link style={styles.link} to="/sobre">
                      <Button style={styles.appBarButton} color="inherit">
                        Sobre
                      </Button>
                    </Link>
                    <Link style={styles.link} to="/login">
                      <Button style={styles.appBarButton} color="inherit">
                        Sou pesquisador
                      </Button>
                    </Link>
                  </div>
                </MediaQuery>
                <MediaQuery maxWidth={1123}>
                  <div style={{flexGrow: 1}}>
                    <Typography color="inherit" variant="title">
                      <Link style={styles.link} to="/">
                        USP Research
                      </Link>
                    </Typography>
                  </div>
                  <IconButton color="inherit">
                    <Menu />
                  </IconButton>
                </MediaQuery>

              </Toolbar>
            </AppBar>
          </div>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/login" component={Login} />
          </Switch>

        </MuiThemeProvider></div>
      </Router>
    )
  }
}

export default App
