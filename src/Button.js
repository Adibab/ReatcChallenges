import React from "react";

export default function Button ({setBirthday }){
    function handleClick(){
        return setBirthday([])
    }
    return(
        <button onClick={handleClick}>Clear All  </button>
    )
}