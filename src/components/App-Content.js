import React from "react";
import { useNavigate } from "react-router-dom";

import "../assets/styles/App-Content.css";


const Content = () => {

    const navigate = useNavigate();

    return (
        <div className="Content">
            <h2>Sideload apps for IOS and Android</h2>
            <h1 className="newFont">Are you sick of developers making you pay to play?</h1>
            <p>
                Fake premium IPAs and APKs that have been cracked and modded, in laymans terms they are altered game files with a few after market feautures. 
                These modded files allow you in game purchases that cost nothing due to the exploits in the source code. While most
                of these apps are premium they are offered at a significant discount compared to the natural progression of a game.
            </p>
            <p>While these apps are already mostly written they take time to reverse engineer in order to crack them effectively. 
                We have free options for contributers and appreciate any help we can get</p>
            <p>
                <span style={{fontWeight: "bold"}}><em>Disclaimer: </em></span> 
                this is a fake website and a project for The Odin Project, 
                this website contains no copyrighted software and does not cost any money to use. 
            </p>
            <button onClick={() => navigate("/store")}>Go To Store</button>
        </div>
    )
}

export default Content