import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="red">
                  welcome Home,{this.props.name }
            </div>
        )
    }
}
export default Home;