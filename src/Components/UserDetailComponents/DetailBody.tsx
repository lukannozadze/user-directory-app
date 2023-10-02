import { user } from "../../user";

const DetailBody  = (props:{users:user[] | null,clickedUser:number | null}) =>{
const clickedUser = props.users?.filter((user)=>user.id === props.clickedUser)[0];

return <div className="text-[28px] flex flex-col gap-5">
    <div className="flex gap-10 ">
        <span className="w-[150px] font-mono">username:</span>
        <span className="font-serif">{clickedUser?.name}</span>
    </div>
    <div className="flex gap-10">
        <span className="w-[150px] font-mono">email:</span>
        <span className="font-serif">{clickedUser?.email}</span>
    </div>
    <div className="flex gap-10">
        <span className="w-[150px] font-mono">city:</span>
        <span className="font-serif">{clickedUser?.address.city}</span>
    </div>
    <div className="flex gap-10">
        <span className="w-[150px] font-mono">address:</span>
        <span className="font-serif">{`${clickedUser?.address.street} | ${clickedUser?.address.suite}`}</span>
    </div>
</div>
}
export default DetailBody;