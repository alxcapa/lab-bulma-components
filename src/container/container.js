import React from "react"
import Message from "./message.js"
import "./container.css"

function Container() {
    return (
        <div className="container-custom">
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </div>
    )

}



export default Container;