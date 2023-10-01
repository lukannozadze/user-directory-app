import { setModalIsHidden } from "../../store/DeleteModalSlicer";
import { deleteUser } from "../../store/UserSlicer";
import { useAppDispatch } from "../../store/store"

const DeleteConfirmationModal = (props:{deletedUserId:number | null}) =>{
     
    //const deleteModalIsShown = useAppSelector(state=>state.delete.modalIsShown);
    const dispatch = useAppDispatch();
return <div className="bg-white w-[40%] flex flex-col items-center gap-4 p-4 border-2 rounded-lg shadow-lg">
   <span className="text-[20px]">Are you sure?</span>
   <p className="text-[18px] font-sans">Do you really want to delete this user?This process cannot be undone</p>
   <div className="flex gap-2 font-sans text-white ">
    <button onClick={()=>{
      dispatch(setModalIsHidden());
    }} className=" p-3 bg-gray-400">Cancel</button>
    <button onClick={()=>{
       
            console.log('rendered');
            dispatch(deleteUser(props.deletedUserId))
            dispatch(setModalIsHidden());
    }} className="p-3 bg-red-500">Delete</button>
   </div>
</div>
}
export default DeleteConfirmationModal