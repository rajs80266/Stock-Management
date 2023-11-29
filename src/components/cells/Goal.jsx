import React from "react";

import stone from "../../images/blue_stone.png";

import './styles.css';

const Goal = (props) => {
    const {haveSTone} = props;

    return (
        <div className="cell">
            <div class="stone-with-gradient">
                {
                    haveSTone ?
                        <img src={stone} alt='' className="stone"/>
                        : <div style={{height: "50px", width: "50px"}}></div>
                }
            </div>
        </div>
    )
};

export default Goal;