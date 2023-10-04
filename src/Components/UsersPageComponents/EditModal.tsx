/* eslint-disable no-useless-escape */

import { zodResolver } from "@hookform/resolvers/zod";
import EditModalInput from "../../UI/EditModalInput";
import { editUser } from "../../store/UserSlicer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {useForm} from "react-hook-form"
import {z} from 'zod'
import { setEditModalIsHidden } from "../../store/EditModalSlicer";
const EditModal = (props:{editedUserId:number|null}) =>{

 const SignUpSchema = z.object({
//added \s to regExp but have no idea why it's not still working, so spaces is not allowed
  name:z.string().regex(new RegExp('.*^[A-Za-z\s]+$.*'),"Letters Only;Spaces"),
  email:z.string().email("Invalid Format"),
  city:z.string().regex(new RegExp('.*^[A-Za-z]\s+$.*'),'Letters Only;Spaces'),
  street:z.string().regex(new RegExp('.*^[A-Za-z]\s+$.*'),'Letters Only;Spaces'),
  suite:z.string()
 })
 type SignUpSchemaType = z.infer<typeof SignUpSchema>;
  const dispatch = useAppDispatch();


    const {
        register,
        handleSubmit,
         formState: { errors },
      } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) })
     
    
    const users = useAppSelector(state=>state.users.usersData);
    const activeUser = props.editedUserId!==null ? users[props.editedUserId-1]:null;
return <form onSubmit={
  handleSubmit((data)=>{
    dispatch(editUser({formObj:data,id:props.editedUserId}))
    dispatch(setEditModalIsHidden());
    alert('User Updated Successfully')
    })} className="bg-white p-8 flex flex-col gap-3 rounded-lg "> 
     <EditModalInput errors={errors} register={register}  key={1} label='name' value={activeUser?.name}/>
     <EditModalInput  errors={errors} register={register} key={2} label='email' value={activeUser?.email}/>
     <EditModalInput  errors={errors} register={register} key={3} label='city' value={activeUser?.address.city}/>
     <EditModalInput  errors={errors} register={register} key={4} label='street' value={activeUser?.address.street}/>
     <EditModalInput  errors={errors} register={register} key={5} label='suite' value={activeUser?.address.suite}/> 
    <div className="flex justify-center mt-2 gap-4 "> 
    <button onClick={()=>{
      dispatch(setEditModalIsHidden())
      alert('User Did Not Update!')
      }} className="bg-white border-2 border-blue-500 b rounded-md text-black p-2 hover:opacity-70">Cancel</button>
    <button type="submit" className="bg-blue-500 rounded-md text-white p-2 hover:opacity-70">Update</button>
    </div>
</form>
}
export default EditModal;