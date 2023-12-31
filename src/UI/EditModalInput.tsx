/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"

interface input{
    label:string
    value:string|undefined
    //@ts-ignore
    register:UseFormRegister<FormValues>;
    errors:FieldErrors | undefined;
}

const EditModalInput = (props:input) => {
    const errorMessage = props.errors?.[props.label]?.message;
    useEffect(()=>{
        console.log(props.errors);
    },[props.errors])
   
return <div className="flex flex-col">
<div className="flex justify-between items-center">
<label className={`${props.errors?.[props.label]?'text-red-500':''} font-mono`}>{props.label}</label>
{/* @ts-ignore */}
{props.errors?.[props.label] &&  <span className={`${props.errors?.[props.label]?'text-red-500':''} font-mono`  }>{errorMessage}</span>}
</div>
<input {...props.register(`${props.label}`)}  className={`${props.errors?.[props.label]?'border-red-500':'' } w-[250px]  p-2 border-2 focus:outline-none`} defaultValue={props.value}/>
</div>

}
export default EditModalInput