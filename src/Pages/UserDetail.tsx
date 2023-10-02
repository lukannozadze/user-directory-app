import { useEffect } from "react";
import DetailBody from "../Components/UserDetailComponents/DetailBody";
import Header from "../Components/UserDetailComponents/Header";
import { user } from "../user";
import { useNavigate } from "react-router-dom";

const UserDetail = (props:{users:user[] | null,clickedUser:number | null}) =>{
    const navigate = useNavigate();
    useEffect(()=>{
       if(props.clickedUser===null){
          navigate('/')
       }
    },[])

return <div>
    <Header/>
    <div className="flex justify-center mt-52">
     <DetailBody clickedUser={props.clickedUser} users={props.users}/>
    </div>
</div>
}
export default UserDetail;