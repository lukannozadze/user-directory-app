import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'
const UsersTableBody = () =>{
return  <tbody>
                <tr className='border-b-2'>
                    <td>Luka</td>
                    <td>nozadzeluka2002@gmail.com</td>
                    <td>Tbilisi</td>
                    <td>
                        <span className='flex'><BsFillTrashFill/>
                       <BsFillPencilFill/>
                        </span>
                        </td> 
                </tr>
                <tr>
                    <td>John</td>
                    <td>JohnDoe00@gmail.com</td>
                    <td>Mystery</td>
                    <td>
                        <span className='flex'><BsFillTrashFill/>
                        <BsFillPencilFill/>
                        </span>
                    </td> 
                </tr>
            </tbody>
}
export default UsersTableBody;