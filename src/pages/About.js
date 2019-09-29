import React from 'react';
import NameForm from '../component/from';
import BoxContent from '../component/children'

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="red">
                <NameForm/>
                <BoxContent text="传递性能"/>
            welcome About,{this.props.name }
            </div>
        )
    }
}
export default About;