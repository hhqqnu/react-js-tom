import React from 'react';

export default class Footer extends React.Component{
  render(){
    const footerStyle = {
      position:'fixed',bottom:0,height:30,left:0,right:0,backgroundColor:'rgb(44, 63, 160)',
      textAlign:'center',fontSize:'22px',lineHeight:'30px',color:'#fff'
    }
    return (
      <footer style={footerStyle}>footer</footer>
    )
  }
}
