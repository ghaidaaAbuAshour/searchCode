import React from 'react';
import Showdata from './Showdata';



const People = props =>
{
  const PeopleArray = props.people.map((pep) =>
  {
   return <Showdata pep={pep} />;
  });

  return <div className="ui container comments">{PeopleArray}</div>;
};


export default People;
