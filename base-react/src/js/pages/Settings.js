import React from 'react';
import ReactDom from 'react-dom';

var CheckLink = React.createClass({
  propTypes:{
    children:React.PropTypes.element.isRequired
  },
  render:function(){
    return <a {...this.props}>{'√ '}{this.props.children}</a>;
  }
});


export default class Settings extends React.Component {

  constructor(props){
    super(props);
    this.state = {name:''};
  }

  handleChange(e){
    const name = e.target.value;
    this.setState({name});
  }

  handleClick(){
    if(this.myTextInput.value=='') this.myTextInput.focus();
    // ReactDom.findDOMNode(this.refs.myTextInput).focus();
  }

  componentDidMount(){
    // this.refs.myTextInput.focus();
    this.myTextInput.focus();
    /* var tInput = this.refs.myTextInput.getDOMNode;
    console.log(tInput); */
    // React.findDOMNode(this.refs.myTextInput).focus();
    // console.log(ReactDom.findDOMNode(this.refs.myTextInput));
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
        <br/>
        <CheckLink href="http://www.google.com.hk" target="_blank">
          <span>click</span>
        </CheckLink>
        <br/>
        <label for="myTextInput">focus input</label>
        <input type="text" id="myTextInput" ref={(ref) => this.myTextInput = ref}/>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
