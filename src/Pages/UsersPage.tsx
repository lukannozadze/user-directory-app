import {useState } from "react";
import Pagination from "../Components/UsersPageComponents/Pagination";
import UsersTableBody from "../Components/UsersPageComponents/UsersTableBody";
import UsersTableHead from "../Components/UsersPageComponents/UsersTableHead";
import { user } from "../user";
import { useAppSelector } from "../store/store";


const UsersPage = (props:{setDeletedUserId:(deletedUserId:number)=>void,setClickedUser:(clickedUser:number|null)=>void,setEditedUserId:(editedUserId:number |null)=>void}) =>{
    const users = useAppSelector(state=>state.users.usersData)
    const [currentPage,setCurrentPage] = useState<number>(1);
    const usersPerPage:number =5;
    const lastPostIndex:number = currentPage * usersPerPage;
    const firstPostIndex:number = lastPostIndex - usersPerPage
    const currentPosts:user[]|undefined = users?.slice(firstPostIndex,lastPostIndex);

return <div className='w-100%'>
    <table className='block overflow-hidden table-fixed border-collapse shadow-lg rounded-[10px]  whitespace-nowrap table-indicator' >
    <UsersTableHead/>
    {
     currentPosts?.map((user)=>{
         return <UsersTableBody setClickedUser={props.setClickedUser}  setDeletedUserId={props.setDeletedUserId} setEditedUserId={props.setEditedUserId} key={user.id} user={user} />
     })
    }

    </table>
    <div className="flex justify-end">
    {currentPosts!==undefined && <Pagination usersData={users} setCurentPage={setCurrentPage} usersPerPage={usersPerPage}/>}
    </div>
</div>

}
export default UsersPage;