import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.scss'
import Home from './pages/Home';
import About from './pages/About';

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
            name:'suntao'
        };
    }
    changeName = () =>{
        this.setState({name:'sujiaojiao'})
    }
    render(){
        const name = this.state.name;
        return (
            <div className="red">
                {name === 'suntao' ? (
                   <Home name={this.state.name}/>
                ) : (
                    <About name={this.state.name}/>
                )}
                
                <p className="yellow">hello , {formatName(user)}!<button onClick={this.changeName}>改变组件</button></p>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App/>,document.getElementById("root"));