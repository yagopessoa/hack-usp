import React, { Component } from 'react'

import CheckBox from '@material-ui/icons/CheckBox'
import List from '@material-ui/icons/List'
import Send from '@material-ui/icons/Send'

const styles = {
    icon: {
        padding: 32,
        fontSize: 48,
    }
}

export default class WorkStep extends Component {
    render(){
        return(
            <div className="work-step-box">
                {this.props.icon==='check' && <CheckBox style={styles.icon} />}
                {this.props.icon==='list' && <List style={styles.icon} />}
                {this.props.icon==='send' && <Send style={styles.icon} />}
                {this.props.text}
            </div>
        )
    }
}
