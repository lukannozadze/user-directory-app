interface input{
    label:string
}

const EditModalInput = (props:input) => {
return <div className="flex flex-col gap">
<label className="font-mono">{props.label}</label>
<input className="w-[250px]  p-2 border-2" type="text"/>
</div>
}
export default EditModalInput