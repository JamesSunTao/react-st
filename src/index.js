import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.scss'
import Home from './pages/Home';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'ssss'
        };
    }
    render(){
        return (
            <div className="red">
                <Home name={this.state.name}/>
                <p className="yellow">hello , {formatName(user)}!</p>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App/>,document.getElementById("root"));