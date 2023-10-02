import DetailBody from "../Components/UserDetailComponents/DetailBody";
import Header from "../Components/UserDetailComponents/Header";
import { user } from "../user";

const UserDetail = (props:{users:user[] | null,clickedUser:number | null}) =>{
return <div>
    <Header/>
    <div className="flex justify-center mt-52">
     <DetailBody clickedUser={props.clickedUser} users={props.users}/>
    </div>
</div>
}
export default UserDetail;