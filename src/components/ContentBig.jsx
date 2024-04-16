import React from "react";

function ContentBig(props){
    return(
        <div className="content-main" style={{width:"48%"}}>
            <a className='resturant-container-main-items-ancchor' href=''>{props.name}</a>
        </div>
    );
}

export default ContentBig;