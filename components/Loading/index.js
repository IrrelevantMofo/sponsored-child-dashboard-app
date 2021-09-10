import { useEffect, useState } from "react";


// core components
function Loading({}) {
  return (<>
    <div className="blobs-container" >
        <div className="blob red"></div>
        <div className="blob orange"></div>
        <div className="blob yellow"></div>
        <div className="blob blue"></div>
        <div className="blob green"></div>
        <div className="blob purple"></div>
        <div className="blob"></div>
    </div>
    </>
  );
}

export default Loading;