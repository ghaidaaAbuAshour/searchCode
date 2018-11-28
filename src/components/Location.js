import React from 'react';
import './Time.css';

class Location extends React.Component
{
state = {latitude : '',longitude:''};

componentDidMount()
{
window.navigator.geolocation.getCurrentPosition(

(position) =>
{
  const latitude="latitude : "+position.coords.latitude;
  const longitude="longitude : "+position.coords.longitude;
  this.setState({latitude : latitude,longitude : longitude});
  const element = document.getElementById("dim");
                element.classList.remove("dimmer");

},
(err) => {
  const element = document.getElementById("dim");
                element.classList.remove("dimmer");
  console.log(err)
}

);

}

render()
{
  return(

   <div className="location">
   <div>{this.state.latitude}</div>
    <div>{this.state.longitude}</div>
   </div>
  );
}
}

export default Location;
