import { Skeleton } from 'primereact/skeleton'

//style
import './InputTime.scss'

export default function ({
    placeholder,
    onChange,
    value,
    skeleton,
    disabled,
    title,
    id,
    className,

}) {

    return (

        !skeleton ?
            <div className={`inputContainer ${className}  ${disabled && "disabledInput"}`}>
                {title && <div className="title_input">{title}</div>}
                <input
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="input"
                    placeholder={placeholder}
                    type={"time"}
                    disabled={disabled}
                />
            </div>
            :
            <Skeleton width='100%' height='100%' />

    )


}