import React from 'react';

export default function Subheader(props) {

    return <h3>Photo {props.current +1} out of {props.total}</h3>

};

// give number out of data.length