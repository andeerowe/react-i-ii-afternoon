import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UpdateName from './Components/updateName'
import UpdateFrom from './Components/updateFrom'
import UpdateJob from './Components/updateJob'
import UpdateEmployer from './Components/updateEmployer'
import UpdateMovies1 from './Components/updateMovies1'
import UpdateMovies2 from './Components/updateMovies2'
import UpdateMovies3 from './Components/updateMovies3'

class App extends Component {
  constructor (){
    super ()

    this.state = {
      pageNumber: 1
    }
  }

  nextPageNumber = () => {
    if(this.state.pageNumber >= 25){
      return
    } else {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    
    }) }
  }

  previousPageNumber = () => {
    if(this.state.pageNumber <= 1){
      return
    } else {
    this.setState({
      pageNumber: this.state.pageNumber -1
    })
    }
  }

  render (){
    console.log(this.state.pageNumber)
  return (
    <div className="App">
      <div>
        <div className="blue-home-bar">
          <span className="homie"><b>Home</b></span>
        </div>

        <div className="grey-container">
          <div className="white-container">
            <div className="page-number-container"><b>{this.state.pageNumber}/25</b></div>
            <div className="data-name"><b><UpdateName pageNumber={this.state.pageNumber}/></b></div>
            <div className="data-info-container">
              <b>
              From: <UpdateFrom pageNumber={this.state.pageNumber}/>
              <br/>
              Job Title: <UpdateJob pageNumber={this.state.pageNumber}/>
              <br />
              Employer: <UpdateEmployer pageNumber={this.state.pageNumber}/>
              </b>
              
            </div>
            <div className="data-favorite-container">
              <p className='favorite-movies'><b>Favorite Movies:</b></p>
              <div className="movies-list">
              1. <UpdateMovies1 pageNumber={this.state.pageNumber}/>
              <br />
              2. <UpdateMovies2 pageNumber={this.state.pageNumber}/>
              <br/>
              3.  <UpdateMovies3 pageNumber={this.state.pageNumber}/>
              </div>
              
              
            </div>


          </div>
          <div className="bottom-nav">
             <button onClick={this.previousPageNumber}><b>&lt; Previous</b></button>
             <button onClick={this.nextPageNumber}><b>Next &gt;</b></button>
          </div>
        </div>

      </div>
      
    </div>
  );
  }
}

export default App;
