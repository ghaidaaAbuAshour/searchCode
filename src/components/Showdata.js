import React from 'react';

class Showdata extends React.Component
{

render()
{
  const {name, id} = this.props.pep;
  const location =this.props.pep.location;

  let locationvalue;

  if(location == null )
  {
    locationvalue ='____';

  }else
  {
    locationvalue=this.props.pep.location;
  }

return(

<div className="comment">

   <a href="/" className="avatar">
   <img key={id} alt="avatar" src={this.props.pep.profile_image.large}/>
   </a>

   <div className="content">

   <a href="/" className="author">{name}</a>

   </div>
   <div className="text">{locationvalue}</div>


   </div>

);


}
}

export default Showdata;
