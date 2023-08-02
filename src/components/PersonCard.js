import React from 'react';
const PersonCard = (props) => {

    const {firstname, lastname, age, color} = props;
    
    return(
        <div>
            <h1 style={{color:"black"}}>{firstname},{lastname}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {color}</p>
        </div>
    );
}
export default PersonCard;