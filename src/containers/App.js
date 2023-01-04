import React, {Component} from 'react';
import Cardlist from '../components/Cardlist'; //this file is not using default export so we have to structure it by putting brackets
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll.js';
// import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

//for Cardlist
class App extends Component{
    constructor(){
        super() //this is something we always put in constructor
        this.state = { 
                        robots : [],
                        searchfield : ''}
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }


    //for searchbox
    onSearchChange = (event)=> {
        this.setState({searchfield: event.target.value}) 
        
    
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //includes does the comparison
        })

    if(this.state.robots.length === 0) {
        return <h1 className='tc f1'>Loading</h1>
    }else {
    return(
    <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
            {/* <ErrorBoundry>  */}
                <Cardlist robots={filteredRobots}/>  
            {/* </ErrorBoundry> */}
        </Scroll>
    </div>
    );
    }
}
}

export default App;