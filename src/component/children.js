import React from 'react';

function Box(props) {
    return (
        <div className={'suntao'+''+props.color}>
            {props.children}
        </div>
    )
}

class BoxContent extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           color:''
       }
    }

    render(){
        return (
            <Box color='red'>
                <ol>
                    <li>1111</li>
                    <li>222222</li>
                    <li>{this.props.text}</li>
                </ol>    
            </Box>
        )
    }
}

export default BoxContent ;