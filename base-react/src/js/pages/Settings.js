import React from 'react';

export default class Settings extends React.Component {

  constructor(props){
    super(props);
    this.state = {name:''};
  }

  handleChange(e){
    const name = e.target.value;
    this.setState({name});
  }

  render(){
    return (
      <div>
        <h1>Settings</h1>
        <label>
          <input type="radio" name="opt" defaultChecked /> Option 1
        </label>
        <br/>
        <label>
          <input type="radio" name="opt" /> Option 2
        </label>
        <br/>
        <label>
          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)}/>
          input content:{this.state.name}
        </label>
        <br/>
        <select defaultValue="C">
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
      </div>
    );
  }
}
