  import UsersPage from './Pages/UsersPage'
  import { useState,useEffect } from 'react';

  import { useAppDispatch,useAppSelector } from './store/store';
  import { setIsLoading, setUsers } from './store/UserSlicer';
  import DeleteConfirmationModal from './Components/UsersPageComponents/DeleteConfirmationModal';
  import { setModalIsHidden } from './store/DeleteModalSlicer';
  import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import UserDetail from './Pages/UserDetail';
  function App() {

  

  const [deletedUserId,setDeletedUserId] = useState<number | null>(null)
  const [clickedUser,setClickedUser] = useState<number | null>(null)
  const isDeleting = useAppSelector(state=>state.delete.modalIsShown);
  const users = useAppSelector(state=>state.users.usersData)
  const isLoading = useAppSelector(state=>state.users.isLoading);
  const dispatch = useAppDispatch();
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>{
    dispatch(setUsers(data));
    dispatch(setIsLoading());
  })
  },[dispatch])
  

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
  <div className='flex flex-col items-center justify-center h-screen bg-[#FAF9F6]'>
     {isLoading && <p className='text-4xl font-serif'>Loading...</p>}
  {!isLoading && users!==null && <UsersPage setClickedUser={setClickedUser}  setDeletedUserId={setDeletedUserId} />}

  {isDeleting && <div onClick={(e)=>{
    const target = e.target as HTMLBodyElement;
    const classname = target.className;
    if(classname.includes('backdrop')){
      dispatch(setModalIsHidden());
      alert('User Is Not Deleted!')
    }
  }} className='backdrop w-screen h-screen absolute bg-black z-10 bg-opacity-60 flex items-center justify-center'>
  <DeleteConfirmationModal deletedUserId={deletedUserId} /> 
  </div>} 
  </div>
          </Route>
          <Route path='/user/:id'>
            <UserDetail  clickedUser={clickedUser} users={users}/>
          </Route>
        </Switch>
      </Router>
    )
  }

  export default App
