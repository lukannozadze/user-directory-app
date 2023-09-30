import UsersTableBody from "../Components/UsersPageComponents/UsersTableBody";

import UsersTableHead from "../Components/UsersPageComponents/UsersTableHead";

const UsersPage = () =>{
return <div className='w-100%'>
    <table className='block overflow-hidden table-fixed border-collapse shadow-lg rounded-[10px]  whitespace-nowrap table-indicator' >
    <UsersTableHead/>
    <UsersTableBody/>
    </table>
</div>

}
export default UsersPage;