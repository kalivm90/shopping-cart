import React from "react";

const Links = ({name, alt, path, id}) => {
    
    return (
        <div id={id}>
            <a href={path}>
                <img className="svg" src={name} alt={alt}></img>
                {alt}
            </a>
        </div>
    )
}

export default Links