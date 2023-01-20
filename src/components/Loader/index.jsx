import React from "react";
import ReactLoading from "react-loading";
import "./style.scss";

function Loader() {
    return (
        <div className="loader-wrapper">
            <ReactLoading type={"spinningBubbles"} color={"green"} height={80} width={80} />
        </div>
    );
}

export default Loader;
