import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.scss'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="red">
                <p className="yellow">hello world</p>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App/>,document.getElementById("root"));