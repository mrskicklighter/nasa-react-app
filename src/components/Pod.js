import React from 'react';

const Pod = props => {

    const results= props.data;
    let pod = results.map(pod =>
        <pod url={pod.url}/>
        );
}
 
export default Pod; 