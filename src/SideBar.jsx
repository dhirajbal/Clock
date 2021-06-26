import React, { useState } from "react";

const side = {maxWidth: "100px", minHeight: 'auto', border: "1px solid", backgroundColor: "#efd45d"}
const button = {backgroundColor: "#efd45d", margin: "30px 15px"}

const SideBar = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    const [count, totalCount] = useState(1);

    const ShowTime = (e) => {
        e.preventDefault();
        let cctime = new Date().toLocaleTimeString();
        var h3 = document.createElement("h3");
        setTime(cctime);
        totalCount(1 + count);
        h3.innerHTML = `You clicked at ${ctime}`;
        var list = document.getElementById("show");
        list.insertBefore(h3, list.childNodes[0]);
        document.getElementById("foot").innerHTML = `You clicked ${count} times`;
    }
    return (<>
        <div className='col-lg-1 p-0' style={ side } >
            <form><button onClick={ShowTime} style={ button }>Click here</button></form>
        </div>
    </>
    )
}

export default SideBar;
