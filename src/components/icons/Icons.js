import React from 'react';

const Icons = (props) => {
    return (<object data={`/media/${props.name}.svg`} width="30" height="30"></object>)
};

export default Icons;