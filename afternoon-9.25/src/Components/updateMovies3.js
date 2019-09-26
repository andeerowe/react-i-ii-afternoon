import React, {Component} from 'react'
import data from './data'

class UpdateMovies3 extends Component {
    constructor(){
        super ()

        this.state = {
            myData: data
        }
    }

    render (){
        return (
            <span>{this.state.myData[this.props.pageNumber - 1].favoriteMovies[2]}</span>
        )
    }
}

export default UpdateMovies3