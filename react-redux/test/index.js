'use strict';

/*
var redux = require('redux');
var createStore = redux.createStore;

function counter(state=0,action){
  switch (action.type) {
    case 'INCREMENT':
        return state + 1;
      break;
    case 'DECREMENT':
        return state - 1;
      break;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});  */

/*
function todos(state=[],action){
  switch (action.type) {
    case 'ADD_TODO':
        return [
          ...state,
          {
            text:action.text,
            completed:false
          }
        ]
    case 'COMPLETE_TODO':
        return state.map((todo,index)=>{
          if(index === action.index){
            return Object.assign({},todo,{
              completed: true
            });
          }
          return todo;
        });
    case 'RESET_TODO':
        return state = action.todos;
    default:
        return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL',action){
  switch (action.type) {
    case 'SET_VISBILITY_FILETER':
        return action.filter
    default:
        return state;
  }
}

import { combineReducers, createStore } from 'redux';
let reducer = combineReducers({ visibilityFilter, todos });
let store = createStore(reducer);

store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch({type:'ADD_TODO','text':(new Date()).getMilliseconds()});
store.dispatch({type:'ADD_TODO','text':(new Date()).getMilliseconds()});
store.dispatch({type:'COMPLETE_TODO','index':0});
store.dispatch({'type':'RESET_TODO','todos':[
  {
    text:'todo_1',
    completed:false
  },
  {
    text:'todo_2',
    completed:false
  },
  {
    text:'todo_3',
    completed:false
  }
]});

store.dispatch({type:'SET_VISBILITY_FILETER',filter:'this is filter'});
*/

var redux = require('redux');
console.log(redux);


