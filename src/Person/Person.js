import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> Ben  {props.name}  insanım sizin gibi  {props.age} yaşım </p>
            <p>{props.children} </p>
            <input type="text" onChange={props.changed} value={props.name}/>
            
        </div>
    );

    };
export default person;