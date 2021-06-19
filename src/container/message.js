import React from "react"

function Message(props) {

    let finalClass = "message"

    if (props.isInfo) {
        finalClass += " is-info"
    }

    return (<article className={finalClass}>
        <div className="message-header">
            <p>{props.title}</p>
            <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
            {props.children}
        </div>
    </article>)

}


export default Message