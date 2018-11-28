import React from 'react';

class SearchBox extends React.Component
{

state={ term :''};

onInputForm = (event)=>
{
this.setState({term : event.target.value });
}

onFormSumbit = (event)=>
{
event.preventDefault();
this.props.onSubmit(this.state.term);

}
render(){

return(
<div className="searchbox">
<form className="ui form" onSubmit={this.onFormSumbit}>
<input placeholder="search for people .. " type="text" value={this.state.term} onChange={this.onInputForm} style={{borderColor: '#716767', width:'80%'}}/>
</form>
</div>


);

}
}
export default SearchBox;
