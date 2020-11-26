import React from "react"

let DateTime = () => {
    let date = new Date();
    return (
        <div className="date-time">
            {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
        </div>
    )
}


export default DateTime