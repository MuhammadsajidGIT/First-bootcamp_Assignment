import React from 'react';

function Car(props){
    return(
<>
<h1>I Have{props.car1} </h1>
<h1>My friend has {props.car2} </h1>
<h1>My uncle has {props.car3}</h1>
</>
    )
}

export default Car;
