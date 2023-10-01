import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'
import { user } from '../../user';
import { useAppDispatch } from '../../store/store'

import { setModalIsShown } from '../../store/DeleteModalSlicer';
const UsersTableBody = (props:{user:user,setDeletedUserId:(deletedUserId:number)=>void}) =>{
    const dispatch = useAppDispatch();
return  <tbody>
                <tr className='border-b-2'>
                    <td>{props.user.name}</td>
                    <td>{props.user.email}</td>
                    <td>{props.user.address.city}</td>
                    <td>
                        <div className='flex gap-3 justify-center'>
                        
                        <span onClick={()=>{
                            console.log(props.user.id);
                            props.setDeletedUserId(props.user.id);
                            dispatch(setModalIsShown());
                            }
                            }><BsFillTrashFill/></span>
                       <BsFillPencilFill/>
                        </div>
                        </td> 
                </tr>
            </tbody>
}
export default UsersTableBody;