import React from 'react';

export default class Settings extends React.Component {
  render(){
    return (
      <div>
        <h1>Settings</h1>
        <label>
          <input type="radio" name="opt" defaultChecked /> Option 1
        </label>
        <label>
          <input type="radio" name="opt" /> Option 2
        </label>
        <select defaultValue="C">
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
      </div>
    );
  }
}
