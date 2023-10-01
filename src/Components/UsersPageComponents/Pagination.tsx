import { user } from "../../user";
import { useState } from "react";
const Pagination = (props:{usersData:user[] | null,usersPerPage:number,setCurentPage:(current:number)=>void}) =>{
    const [isActive,setIsActive] = useState<number>(1);
const pages:number[] = [];
if(props.usersData!==null){
    for(let i=0; i<props.usersData.length/props.usersPerPage;i++){
        pages.push(i);
    }
}

return <div className="flex gap-2">
 {pages.map((i)=>{
    return <button key={i+1} onClick={()=>{props.setCurentPage(i+1), setIsActive(i+1)}} className={`${isActive===i+1?'bg-[#ccc]':''} border-2 font-bold px-3 py-2`}>{i+1}</button>
 })}
</div>
}
export default Pagination;