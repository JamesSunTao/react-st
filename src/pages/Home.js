import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="red">
                能否告诉大家开了个{this.props.name }
            </div>
        )
    }
}
export default Home;