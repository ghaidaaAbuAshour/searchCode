import React from 'react';

const Loader = (props) =>
{

return (
<div id="dim" className="ui active dimmer">
<div className="ui big text loader">
{props.message}
</div>
</div>
);


}

export default Loader;
