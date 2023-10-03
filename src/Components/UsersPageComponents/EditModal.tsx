import EditModalInput from "../../UI/EditModalInput";

const EditModal = () =>{
    const inputsArr = [{id:1,label:'name'},{id:2,label:'email'},{id:3,label:'city'},{id:4,label:'street'},{id:5,label:'suite'}];
return <form className="bg-white p-8 flex flex-col gap-3 "> 
  {inputsArr.map((inputObj)=>{
    return <EditModalInput key={inputObj.id} label={inputObj.label}/>
  })}
    
    <div className="flex justify-center mt-2">
    <button className="bg-blue-500 rounded-sm text-white p-2">Update</button>
    </div>
</form>
}
export default EditModal;