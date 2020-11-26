import React from 'react';

var ReactRotatingText = require('react-rotating-text');

const TextRotator = (props) => {
    return(
        <ReactRotatingText items={props.items} />
    )
};

export default TextRotator;