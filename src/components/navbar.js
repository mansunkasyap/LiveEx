import React from "react";
import faceImg from "../images/Mkasyap.jpg"

export default function Navbar() {
    return (
        <div className="nav-compo">
            <div className="nav--part1">
                <img
                    src={faceImg}
                    alt="imggg"
                    className="face--img"
                />

                <div className="mg--txt">
                    <h2>Meme Generator</h2>
                </div>
            </div>
            
            <div className="nav--part2">
                <h4>React Course - Project3</h4>
            </div>
        </div>
    )
}