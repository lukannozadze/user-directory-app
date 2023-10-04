import EditModalInput from "../../UI/EditModalInput";
import { editUser } from "../../store/UserSlicer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {useForm} from "react-hook-form"
const EditModal = (props:{editedUserId:number|null}) =>{
  const dispatch = useAppDispatch();
    interface Inputs{
        name: string,
        email: string,
        city:string,
        street:string,
        suite:string
      }
    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm<Inputs>()
     
    
    const users = useAppSelector(state=>state.users.usersData);
    const activeUser = props.editedUserId!==null ? users[props.editedUserId-1]:null;
return <form onSubmit={handleSubmit((data)=>{dispatch(editUser({formObj:data,id:props.editedUserId}))})} className="bg-white p-8 flex flex-col gap-3 "> 
     <EditModalInput register={register}  key={1} label='name' value={activeUser?.name}/>
     <EditModalInput  register={register} key={2} label='email' value={activeUser?.email}/>
     <EditModalInput  register={register} key={3} label='city' value={activeUser?.address.city}/>
     <EditModalInput  register={register} key={4} label='street' value={activeUser?.address.street}/>
     <EditModalInput  register={register} key={5} label='suite' value={activeUser?.address.suite}/> 
    <div className="flex justify-center mt-2"> 
    <button type="submit" className="bg-blue-500 rounded-sm text-white p-2">Update</button>
    
    </div>
</form>
}
export default EditModal;