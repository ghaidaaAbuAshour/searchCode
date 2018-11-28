import React from 'react';
import Time from './Time';
import Fakerfile from './Fakerfile';
import Location from './Location';
import Loader from './Loader';
import SearchBox from './SearchBox';
import './Time.css';
import Unsplash from '../api/Unsplash';
import People from './People';




class App extends React.Component
{
  state = { people: []};


  onSumbitSearch = async (term)=>
  {

    const response = await Unsplash.get('/search/users',{
    params : { query : term}
    });

     console.log(response.data.results);
    this.setState({ people : response.data.results});

  }

render()
{
 return(
  <div className="ui segment">

  <Loader message="loading..."/>
  <div className="ui segment" style={{backgroundColor: 'moccasin',borderRadius: '10px'}}>  <Time />  </div>
  <Location />
  <Fakerfile images_key="avatar"/>
  <SearchBox onSubmit={this.onSumbitSearch}/>
  <People people={this.state.people}/>
  </div>
);
}

}
Loader.defaultProps={message:"loading..."};

export default App;
