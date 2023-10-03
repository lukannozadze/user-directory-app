import { user } from '../../user';
import { useAppDispatch } from '../../store/store'

import { setEditModalIsShown } from '../../store/EditModalSlicer';
import {useNavigate } from 'react-router-dom';
import { editUser } from '../../store/UserSlicer';
import { setDeleteModalIsShown } from '../../store/DeleteModalSlicer';
const UsersTableBody = (props:{user:user,setDeletedUserId:(deletedUserId:number)=>void,setClickedUser:(clickedUser:number|null)=>void}) =>{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
return  <tbody onClick={(e)=>{
    const target = e.target as HTMLButtonElement;
    const id = target.id;
    if(id!=='action'){
        props.setClickedUser(props.user.id);
        console.log(e);
        navigate(`/user/${props.user.id}`)
    }
}}>
                <tr className='border-b-2 cursor-pointer'>
                    <td>{props.user.name}</td>
                    <td>{props.user.email}</td>
                    <td>{props.user.address.city}</td>
                    <td>
                        <div  className='flex gap-3 justify-center'>
                        
                        <button id='action' className='bg-red-500 p-3 text-white rounded-md' onClick={()=>{
                            console.log(props.user.id);
                            props.setDeletedUserId(props.user.id);
                            dispatch(setDeleteModalIsShown());
                            }
                            }>Delete</button>
                       <button  onClick={(e)=>{
                        const target = e.target as HTMLButtonElement;
                        const className = target.className;
                        console.log(className);
                        if(className.includes(`user-${2}`)){
                            
                              dispatch(editUser({id: 2,
                                name: "Gelaaaaaaa Howell",
                                username: "Antonette",
                                email: "Shanna@melissa.tv",
                                street: "Victor Plains",
                                suite: "Suite 879",
                                city: "Wisokyburgh",
                              }
                              ))
                        }
                        dispatch(setEditModalIsShown())
                       }} id='action' className={`user-${props.user.id} p-3 bg-green-400 text-white rounded-md`}>Edit</button>
                        </div>
                        </td> 
                </tr>
            </tbody>
}
export default UsersTableBody;