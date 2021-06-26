import React from "react";
import img from "./clocklogo.png";

const logo={maxWidth:"100px",minHeight:'100px',border:"1px 0px 0px 1px solid"}

const Logo = ()=>{
    return( <>
               <div className='col-lg-1 p-0 ' style={ logo }>
                    <img src={img} height="100px" width="100px"  />
                </div>
            </>
    )
}

export default Logo;
