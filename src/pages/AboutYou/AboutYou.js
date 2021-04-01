import React from "react";
import './AboutYou.css';

class AboutYou extends React.Component{
    constructor(){
        super();
            this.state = {
                firstName: '',
            }
    }

    render(){
        return(
            <div>
                <h2 className="AboutYou">ABout you </h2>
            </div>
        )
    }
}

export default AboutYou;