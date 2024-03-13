import { ForwardedRef, forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IInputProps } from "../../../interfaces/inputInterface";

export const InputPassword = forwardRef(({ error, label, ...rest }:IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
   const [isHidden, setIsHidden] = useState(true);

   return (
      <div>
         <label className="label">{label}</label>
         <div>
            <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
            <button type="button" onClick={() => setIsHidden(!isHidden)}>
               {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
            </button>
         </div>
         {error ? <p>{error.message}</p> : null}
      </div>
   );
});