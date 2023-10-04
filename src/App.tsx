  import UsersPage from './Pages/UsersPage'
  import { useState,useEffect } from 'react';

  import { useAppDispatch,useAppSelector } from './store/store';
  import {setIsLoading, setUsers } from './store/UserSlicer';
  import DeleteConfirmationModal from './Components/UsersPageComponents/DeleteConfirmationModal';
  import { setDeleteModalIsHidden } from './store/DeleteModalSlicer';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDetail from './Pages/UserDetail';
import ErrorPage from './Pages/ErrorPage';
import EditModal from './Components/UsersPageComponents/EditModal';
import { setEditModalIsHidden } from './store/EditModalSlicer';
  function App() {

  

  const [deletedUserId,setDeletedUserId] = useState<number | null>(null)
  const [editedUserId,setEditedUserId] = useState<number | null>(null)
  const [clickedUser,setClickedUser] = useState<number | null>(null)
  const isDeleting = useAppSelector(state=>state.delete.modalIsShown);
  const users = useAppSelector(state=>state.users.usersData)
  const isLoading = useAppSelector(state=>state.users.isLoading);
  const isEditing = useAppSelector(state=>state.edit.modalIsShown);
  const dispatch = useAppDispatch();
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>{
    dispatch(setUsers(data));
    dispatch(setIsLoading());
  })
  
  },[dispatch])


    return (
      <BrowserRouter>
     <Routes>
          <Route path='/' element={
            
  <div className='flex flex-col items-center justify-center h-screen bg-[#FAF9F6]'>
    
      {isLoading && <p className='text-4xl font-serif'>Loading...</p>}
  {!isLoading && users!==null && <UsersPage setClickedUser={setClickedUser}  setDeletedUserId={setDeletedUserId} setEditedUserId={setEditedUserId} />}

  {isDeleting && <div onClick={(e)=>{
    const target = e.target as HTMLBodyElement;
    const classname = target.className;
    if(classname.includes('backdrop-delete')){
      dispatch(setDeleteModalIsHidden());
      alert('User Is Not Deleted!')
    }
  }} className='backdrop-delete w-screen h-screen absolute bg-black z-10 bg-opacity-60 flex items-center justify-center'>
  <DeleteConfirmationModal deletedUserId={deletedUserId} /> 
  </div>}  
  {isEditing && <div onClick={(e)=>{
    const target = e.target as HTMLBodyElement;
    const classname = target.className;
    if(classname.includes('backdrop-edit')){
      dispatch(setEditModalIsHidden());
      // alert('User Is Not Editted!')
    }
  }} className='backdrop-edit w-screen h-screen absolute bg-black z-10 bg-opacity-60 flex items-center justify-center'>
     <EditModal editedUserId={editedUserId}/>
  </div>}
  </div>
          }
            />
          <Route path='/user/:id' element={
            <UserDetail  clickedUser={clickedUser} users={users}/>
          }/>
            <Route path='*' element={<ErrorPage/>}/>
     </Routes>
      </BrowserRouter>
      
    )
  }

  export default App
