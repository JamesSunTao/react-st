import React from 'react';

function BoilingVerdict(props) {
    var text = "";
    if(props.temperature>=100){
       text = "你的水是开水";
    }else{
        text = "你的水未开";
    }
    return (<p>{text}</p>);
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {temperature:''}
    }
    changeTemperature=(e)=>{
         this.setState({temperature:e.target.value});
    }
    render(){
        const temperature = this.state.temperature;
        return (
            <div>
                请输入温度：<input type="text" value={temperature} onChange={this.changeTemperature}/>
                <BoilingVerdict temperature={temperature}/>  
            </div>
        )
    }
}

export default Calculator;