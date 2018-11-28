import React from 'react';
import faker from 'faker';
import './Time.css';


const Fakerfile = (props) =>
{

return(
<div style={{textAlign: 'center',borderRadius: '10px'}} className="ui segment">
  <img  className="image_avatar"  key="img1" alt={props.images_key} src={faker.image.avatar()} />
  <img  className="image_avatar"  key="img2" alt={props.images_key} src={faker.image.avatar()} />
  <img  className="image_avatar"  key="img3" alt={props.images_key} src={faker.image.avatar()} />
  <img  className="image_avatar"  key="img4" alt={props.images_key} src={faker.image.avatar()} />
  <img  className="image_avatar"  key="img5" alt={props.images_key} src={faker.image.avatar()} />
  <img  className="image_avatar"  key="img6" alt={props.images_key} src={faker.image.avatar()} />
</div>
);

}


export default Fakerfile;
