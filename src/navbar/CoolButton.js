import React from "react";

function CoolButton(props) {

    let finalClass = "button " + props.className
    if (props.isSmall) {
        finalClass += " is-small"

    }

    if (props.isDanger) {

        finalClass += " is-danger"
    }

    if (props.isSuccess) {

        finalClass += " is-success"
    }

    return (
        <div>
            <button className={finalClass}>Button</button>
        </div>
    )

}

export default CoolButton