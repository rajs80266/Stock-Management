import React, { useEffect, useState } from "react";

import stone from "../../images/blue_stone.png";
import car from "../../images/car_left.png";

import './styles.css';

const Cell = (props) => {
    const {haveSTone, haveCar} = props;

    return (
        <div className="cell">
            {
                haveSTone ?
                    <img src={stone} alt='' className="stone"/>
                    : <div style={{height: "100%", width: "100%"}}></div>
            }
            {
                haveCar ?
                    <img src={car} alt='' className={"car-horizontal"} />
                    : <div style={{height: "100%", width: "100%"}}></div>
            }
        </div>
    )
};

export default Cell;