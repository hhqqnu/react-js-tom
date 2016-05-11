import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

var TodoList = React.createClass({
  mixins:[LinkedStateMixin],
  getInitialState(){
    return {
      items:['hello','world','click','me'],
      newItem:''
    };
  },
  handleAdd(){
    // var newItem = prompt('entenr any world?');
    var newItem = this.state.newItem;
    if(!newItem) return;
    var newItems = this.state.items.concat(newItem);
    this.setState({items:newItems,newItem:''},function(){
      this.refs.todoInput.value = '';
    });
  },
  handleRemove(i){
    var newItems = this.state.items.slice();
    newItems.splice(i,1);
    this.setState({items:newItems});
  },
  /* handleChange(newValue){
    this.setState({newItem:newValue});
  }, */

  componentDidMount(){
    this.refs.todoInput.focus();
  },
  render(){
    var valueLink = this.linkState('newItem');
    var handleChange = function(e){
      valueLink.requestChange(e.target.value);
    }
    var items = this.state.items.map((item,i)=>{
      return (
        <div key={'item'+i} onClick={this.handleRemove.bind(this,i)}>
          {item}
        </div>
      );
    });
    return (
      <div>
        <input ref="todoInput" type="text" value={valueLink.value} onChange={handleChange} />
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

export default TodoList;
/*
var SetIntervalMixin = {
  componentWillMount: function(){
    this.intervals = [];
  },
  setInterval: function(){
    this.intervals.push(setInterval.apply(null,arguments));
  },
  componentWillUnmount: function(){
    // this.intervals.map(clearInteval);
    var intervals = this.intervals;
    for(var i=0,l=intervals.length;i<l;i++){
      var curInterval = intervals[i];
      clearInterval(curInterval);
    }
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function(){
    return {seconds:0};
  },
  componentDidMount: function(){
    this.setInterval(this.tick,1000);
  },
  tick: function(){
    this.setState({seconds:this.state.seconds +1 });
  },
  render: function(){
    return (
      <p>
        React has been running for {this.state.seconds} seconds;
      </p>
    );
  }
});

export default TickTock;
*/
