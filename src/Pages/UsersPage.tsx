import UsersTableBody from "../Components/UsersPageComponents/UsersTableBody";
import UsersTableHead from "../Components/UsersPageComponents/UsersTableHead";
import { user } from "../user";

const UsersPage = (props:{userData:user[] | undefined}) =>{
return <div className='w-100%'>
    <table className='block overflow-hidden table-fixed border-collapse shadow-lg rounded-[10px]  whitespace-nowrap table-indicator' >
    <UsersTableHead/>
    {
     props.userData?.map((user)=>{
         return <UsersTableBody key={user.id} user={user} />
     })
    }

    </table>
</div>

}
export default UsersPage;