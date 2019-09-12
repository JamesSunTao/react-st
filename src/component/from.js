import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',text:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleChange1 = (event) => {
        this.setState({text: event.target.value});
      }
  
    handleSubmit(event) {
    //   this.setState({value: event.target.value.toUpperCase()});
      console.log({text:this.state.value});
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />

            <select value={this.state.text} onChange={this.handleChange1}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
          </select>
           当前名称: {this.state.text}
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;