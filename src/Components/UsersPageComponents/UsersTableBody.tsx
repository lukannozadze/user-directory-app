import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'
import { user } from '../../user';
const UsersTableBody = (props:{user:user}) =>{
return  <tbody>
                <tr className='border-b-2'>
                    <td>{props.user.name}</td>
                    <td>{props.user.email}</td>
                    <td>{props.user.address.city}</td>
                    <td>
                        <span className='flex'><BsFillTrashFill/>
                       <BsFillPencilFill/>
                        </span>
                        </td> 
                </tr>
            </tbody>
}
export default UsersTableBody;