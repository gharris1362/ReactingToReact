import React, { Component } from 'react';
import { render } from 'react-dom';

let root = document.getElementById('root')
// function App(props) {
//     return <h1>Hello, {props.firstName}!</h1>
// }
// render(
//     Element,
//     document.getElementById('root')
// );  





class App extends Component {
    constructor(props, element) {
        super(props, element);
        this.firstName = 'Garrett'
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            text: 'Harris',
            placeholder: 'Placeholder',
            value: '',
            hasLoaded: false

        }
    }
    handleChange= (thisthing) =>{
        this.setState({ value: thisthing.target.value})
        console.log(this.state.value)
    }
    
    checkLoad = () => {
        if(this.state.hasLoaded === false) {
           this.state.hasLoaded = true
        console.log(this.state.hasLoaded)  
        }
       else if (this.state.hasLoaded == true) {
           this.state.hasLoaded = false
           console.log(this.state.hasLoaded)
       }
    }
    render() {
        return (
            <React.Fragment>
                
                <div id='check'>
                      <h1>Hello, {this.firstName + ' ' + this.state.text}!</h1>
                <p>{this.state.value}</p>
                <input placeholder={this.state.placeholder} onChange={this.handleChange.bind(this)} ></input>
                 <button onClick={this.checkLoad}> </button>
                </div>
              
            </React.Fragment>
        )
    }
}
render(<App />, root)
