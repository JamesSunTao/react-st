import React from 'react';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="red">
            welcome About,{this.props.name }
            </div>
        )
    }
}
export default About;