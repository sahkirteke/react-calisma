import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> Ben  {props.name}  insanım sizin gibi  {props.age} yaşım </p>
            <p>{props.children} </p>
            
        </div>
    );

    };
export default person;