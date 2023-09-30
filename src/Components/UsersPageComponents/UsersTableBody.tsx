import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'
import { user } from '../../user';
import { useAppDispatch } from '../../store/store'
import { deleteUser } from '../../store/UserSlicer';
const UsersTableBody = (props:{user:user}) =>{
    const dispatch = useAppDispatch();
return  <tbody>
                <tr className='border-b-2'>
                    <td>{props.user.name}</td>
                    <td>{props.user.email}</td>
                    <td>{props.user.address.city}</td>
                    <td>
                        <div className='flex'>
                        
                        <span onClick={()=>{console.log(props.user.id), dispatch(deleteUser(props.user.id))}}><BsFillTrashFill/></span>
                       <BsFillPencilFill/>
                        </div>
                        </td> 
                </tr>
            </tbody>
}
export default UsersTableBody;