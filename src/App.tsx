import Pagination from './Components/UsersPageComponents/Pagination';
import UsersPage from './Pages/UsersPage'
import { useState,useEffect } from 'react';
import { user } from './user';
 import { useAppDispatch,useAppSelector } from './store/store';
import { setUsers } from './store/UserSlicer';
import DeleteConfirmationModal from './Components/UsersPageComponents/DeleteConfirmationModal';
import { setModalIsHidden } from './store/DeleteModalSlicer';

function App() {

 
 const [currentPage,setCurrentPage] = useState<number>(2);
 const [deletedUserId,setDeletedUserId] = useState<number | null>(null)
 const users = useAppSelector(state=>state.users.usersData)
 const isDeleting = useAppSelector(state=>state.delete.modalIsShown);
 const usersPerPage:number =5;
const dispatch = useAppDispatch();
 useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>{
  
  dispatch(setUsers(data));
})
 },[dispatch])
 
const lastPostIndex:number = currentPage * usersPerPage;
const firstPostIndex:number = lastPostIndex - usersPerPage
const currentPosts:user[]|undefined = users?.slice(firstPostIndex,lastPostIndex);
  return (
<div className='flex flex-col items-center justify-center h-screen bg-[#FAF9F6]'>
 {users!==null && <UsersPage setDeletedUserId={setDeletedUserId} userData = {currentPosts} />}
 <Pagination usersData={users} setCurentPage={setCurrentPage} usersPerPage={usersPerPage} />
 {isDeleting && <div onClick={(e)=>{
  const target = e.target as HTMLBodyElement;
  const classname = target.className;
  if(classname.includes('backdrop')){
    dispatch(setModalIsHidden());
  }
 }} className='backdrop w-screen h-screen absolute bg-black z-10 bg-opacity-60 flex items-center justify-center'>
 <DeleteConfirmationModal deletedUserId={deletedUserId} /> 
 </div>}
</div>
  )
}

export default App
