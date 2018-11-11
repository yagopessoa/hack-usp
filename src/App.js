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
import Labs from './Pages/Labs'
import Cadastro from './Pages/Cadastro'
import CadastroPesquisador from './Pages/CadastroPesquisador'
import LoginPesquisador from './Pages/LoginPesquisador'

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
    height: 25
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
    padding: 12,
    fontSize: 16,
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
        Conecte-se a Laboratórios de Pesquisa para potencializar seu negócio!
      </h1>
      Veja quais pesquisas estão sendo desenvolvidas na Universidade. Encontre alguma que possa ser aplicada no contexto da sua empresa. Colha os resultados dentro da sua empresa.
    </div>
    <div className="how-it-works">
      <div className="work-steps" >
        <WorkStep step='1' icon='check' text='Defina áreas de atuação' />
        <WorkStep step='2' icon='list' text='Confira a lista de laboratórios que mais combinam com sua empresa' />
        <WorkStep step='3' icon='send' text='Entre em contato para fechar a parceria' />
      </div>
      <Link style={styles.link} to="/labs">
        <Button style={styles.button} variant="contained" size="large" color="secondary" >
          <span style={{color: '#FFF'}}>Começar</span>
        </Button>
      </Link>
    </div>
  </div>
  {/* <div className="why" id="why">
    <h4>Porque contratar serviços diretamente dos laboratórios de Universidades?</h4>
    O USP Research conecta sua empresa com os melhores laboratórios universitários de pesquisa e inovação da américa latina.
  </div> */}
</MuiThemeProvider>

class App extends Component {

  render() {
    return (
      <Router>
        <div><MuiThemeProvider theme={theme}>
          <div style={styles.root}>
            <AppBar color="primary" position="absolute">
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
                    <Link style={styles.link} to="#why">
                      <Button style={styles.appBarButton} color="inherit">
                        Sobre
                      </Button>
                    </Link>
                    <Link style={styles.link} to="/empresa">
                      <Button style={styles.appBarButton} color="inherit">
                        Sou Empresa
                      </Button>
                    </Link>
                    <Link style={styles.link} to="/pesquisador">
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
            <Route path="/empresa" component={Login} />
            <Route path="/labs" component={Labs} />
            <Route path="/pesquisador" component={LoginPesquisador}/>
            <Route path="/cadastroPesquisador" component={CadastroPesquisador}/>
            <Route path="/cadastroEmpresa" component={Cadastro}/>
          </Switch>

        </MuiThemeProvider></div>
      </Router>
    )
  }
}

export default App
