import React from "react"; 
import ReactLoading from "react-loading";


function Loading() {
    return (
        <div className="divloader">
            <ReactLoading
            type="bubbles"
            color="blue"
            height={"5%"}
            width={"5%"}
            className="loading"
            />
        </div>
    );
}

export default Loading;