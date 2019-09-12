import React from 'react';
import NameForm from '../component/from';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="red">
                <NameForm/>
            welcome About,{this.props.name }
            </div>
        )
    }
}
export default About;