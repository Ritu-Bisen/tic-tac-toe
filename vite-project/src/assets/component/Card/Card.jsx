import React from 'react'
import Icon from '../Icon/Icon'
import "./Cars.css"
function Card({ player, onplay, index , gameEnd }) {
    let icon = <Icon />
    if (player === "X") {
        icon = <Icon name="cross" />
    }
    else if (player === "O") {
        icon = <Icon name="circle" />
    }
    return (
        <div className="abc" onClick={()=>!gameEnd && onplay(index) } >
            {icon}
        </div>
    )
}

export default Card
