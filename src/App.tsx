import Pagination from './Components/UsersPageComponents/Pagination';
import UsersPage from './Pages/UsersPage'
import { useState,useEffect } from 'react';
import { user } from './user';
 import { useAppDispatch,useAppSelector } from './store/store';
// import { useDispatch,useSelector } from 'react-redux';
import { setUsers } from './store/UserSlicer';

function App() {

 
 const [currentPage,setCurrentPage] = useState<number>(2);
 const users = useAppSelector(state=>state.users.usersData)
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
 {users!==null && <UsersPage userData = {currentPosts} />}
 <Pagination usersData={users} setCurentPage={setCurrentPage} usersPerPage={usersPerPage} />
</div>
  )
}

export default App
