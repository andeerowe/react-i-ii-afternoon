import React, {Component} from 'react'
import data from './data'

class UpdateJob extends Component {
    constructor(){
        super ()

        this.state = {
            myData: data
        }
    }

    render (){
        return (
            <span>{this.state.myData[this.props.pageNumber - 1].title}</span>
        )
    }
}

export default UpdateJob