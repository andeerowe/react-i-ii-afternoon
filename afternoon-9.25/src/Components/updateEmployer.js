import React, {Component} from 'react'
import data from './data'

class UpdateEmployer extends Component {
    constructor(){
        super ()

        this.state = {
            myData: data
        }
    }

    render (){
        return (
            <span>{this.state.myData[this.props.pageNumber - 1].employer}</span>
        )
    }
}

export default UpdateEmployer