import React from "react";

function Avatar(props){
    return(
        <img src={props.author.avatarUrl} alt={props.author.name}/>
    )
}