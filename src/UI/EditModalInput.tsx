import { UseFormRegister } from "react-hook-form"

interface input{
    label:string
    value:string|undefined
    register:UseFormRegister<any>;
}

const EditModalInput = (props:input) => {
return <div className="flex flex-col gap">
<label className="font-mono">{props.label}</label>
<input {...props.register(`${props.label}`)}  className="w-[250px]  p-2 border-2" type="text" defaultValue={props.value}/>
</div>
}
export default EditModalInput