import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userDetails"

const Links = ({name, alt, path, id}) => {
    
    const {cartItemCount} = useContext(UserContext);
    
    return (
        <div id={id} name={alt}>
            {alt !== "Cart" ? (
                <Link to={path}>
                    <img className="svg" src={name} alt={alt}></img>
                    {alt}
                </Link>
            ) : (
                <Link to={path}>
                    <img className="svg" src={name} alt={alt}></img>
                    {alt}
                    <p className="Cart-Num" data-testid="cartNum">{cartItemCount}</p>
                </Link>
            )}
        </div>
    )
}

export default Links