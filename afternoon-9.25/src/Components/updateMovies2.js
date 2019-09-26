import React, {Component} from 'react'
import data from './data'

class UpdateMovies2 extends Component {
    constructor(){
        super ()

        this.state = {
            myData: data
        }
    }

    render (){
        return (
            <span>{this.state.myData[this.props.pageNumber - 1].favoriteMovies[1]}</span>
        )
    }
}

export default UpdateMovies2