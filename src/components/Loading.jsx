import React from "react"; 
import ReactLoading from "react-loading";


function Loading() {
    return (
        <div className="divloader">
            <ReactLoading
            type="bubbles"
            color="blue"
            height={"10%"}
            width={"10%"}
            className="loading"
            />
        </div>
    );
}

export default Loading;