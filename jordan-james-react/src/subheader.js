import React from 'react';

export default function Subheader(props) {
if(props.total > 0){
    return <h3>Photo {props.current +1} out of {props.total}</h3>
}
else {
    return <h4>{props.caption}</h4>
}
};

// give number out of data.length