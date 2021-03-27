import React from 'react';
import './Button.css'

function Button(props){
    return(
        <div >
            <button className="button" onClick={props.onPress}>{props.name}</button>
        </div>
    )
}
export default Button;