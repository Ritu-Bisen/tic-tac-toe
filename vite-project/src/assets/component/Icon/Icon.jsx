import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaPen } from "react-icons/fa";

function Icon({ name }) {
    if (name === "circle") {
        return <FaRegCircle />
    }
    else if (name === "cross") {
        return <ImCross  />
    }
    else {
        return (
            <FaPen />
        )
    }


}

export default Icon
