import React from 'react';
import './Time.css';



class Time extends React.Component
{


state = { time : '' , icon : 'clock', date: ''};

componentDidMount()
{
  setInterval( () =>
  {

   this.setState({time : new Date().toLocaleTimeString()});

  } ,1000);

  const date_format= (new Date().getMonth()+1)+'/'+new Date().getDate()+'/'+new Date().getFullYear();
  this.setState({date : date_format});

}


render()
{


return (
  <div style={{display: 'flex'}}>
  <div  className="time">
  <i className={`${this.state.icon} icon`}></i>
   {this.state.time}
  <i className={`${this.state.icon} icon`}></i>
  </div>
  <div  className="date">{this.state.date} </div>
  </div>
);

}

}

export default Time;
