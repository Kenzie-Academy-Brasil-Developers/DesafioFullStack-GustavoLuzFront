import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../../../interfaces/inputInterface";

export const Input = forwardRef(( { label,error, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div>
           <label >{label}</label>
           <input ref={ref} {...rest} />
           {error ? <p>{error.message}</p> : null}
        </div>
     );
});