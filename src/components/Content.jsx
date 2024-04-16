import React from "react";
function Content(props){
    return(
        <div className="content-main">
            
                <a className='resturant-container-main-items-ancchor' href=''>{props.main} {props.title}</a>
                
            
        </div>
    );
}

export default Content;