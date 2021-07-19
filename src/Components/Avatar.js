import React from 'react'

function Avatar(props) {
    let url = (props.image);
    return (
        <img alt="avatar" className="image" src={`${url}`}></img>
    );
}

export default Avatar
