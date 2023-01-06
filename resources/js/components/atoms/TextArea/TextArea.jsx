import React from "react";
import './TextArea.scss'

const TextArea = ({ children, className, value, id, onChange, placeholder, title }) => {
    return (
        <>
            <div className="title-textarea">{title}</div>
            <textarea placeholder={placeholder} value={value} id={id} onChange={onChange} className={`textArea ${className}`}>{children}</textarea>
        </>
    )
}
export default TextArea