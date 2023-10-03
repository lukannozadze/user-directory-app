import { user } from '../../user';
import { useAppDispatch } from '../../store/store'

import { setModalIsShown } from '../../store/DeleteModalSlicer';
import {useNavigate } from 'react-router-dom';
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
                            dispatch(setModalIsShown());
                            }
                            }>Delete</button>
                       <button id='action' className='p-3 bg-green-400 text-white rounded-md'>Edit</button>
                        </div>
                        </td> 
                </tr>
            </tbody>
}
export default UsersTableBody;