import React, { Component } from 'react'

import CheckBox from '@material-ui/icons/CheckBox'
import List from '@material-ui/icons/List'
import Send from '@material-ui/icons/Send'

const styles = {
    icon: {
        padding: 32,
        fontSize: 48,
    },
    step: 1,
}

export default class WorkStep extends Component {
    render(){
        return(
            <div>
                <div style={{marginBottom: 0}}>
                    <h2 align-itens='left'>{this.props.step})</h2>
                </div>
                <div className="work-step-box" style={{marginTop: 0}}>
                    {this.props.icon==='check' && <CheckBox style={styles.icon} />}
                    {this.props.icon==='list' && <List style={styles.icon} />}
                    {this.props.icon==='send' && <Send style={styles.icon} />}
                    {this.props.text}
                </div>
            </div>
        )
    }
}
