import React from "react";
import { Link } from "react-router-dom";

const Links = ({name, alt, path, id}) => {
    
    return (
        <div id={id}>
            <Link to={path}>
                <img className="svg" src={name} alt={alt}></img>
                {alt}
            </Link>
            {/* <a href={path}>
                <img className="svg" src={name} alt={alt}></img>
                {alt}
            </a> */}
        </div>
    )
}

export default Links