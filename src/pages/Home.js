import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numArr:[1,2,3]
        };
    }
    render(){
        const numArr = this.state.numArr;
        return (
            <div className="red">
                <ul>
                {
                    numArr.map((item)=>{
                       return (<li key={item}>{item}</li>)
                    })
                }
                </ul>
                  welcome Home,{this.props.name }
            </div>
        )
    }
}
export default Home;