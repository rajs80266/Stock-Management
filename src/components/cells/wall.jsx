import React from "react";

import './styles.css';

const Wall = () => {
    return (
        <div className="wall">
            {
               <div style={{height: "100%", width: "100%"}}></div>
            }
        </div>
    )
};

export default Wall;