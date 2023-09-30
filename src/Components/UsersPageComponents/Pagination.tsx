import { user } from "../../user";
const Pagination = (props:{usersData:user[] | null,usersPerPage:number,setCurentPage:(current:number)=>void}) =>{
const pages:number[] = [];
if(props.usersData!==null){
    for(let i=0; i<props.usersData.length/props.usersPerPage;i++){
        pages.push(i);
    }
}
return <div className="flex gap-2">
 {pages.map((i)=>{
    return <button key={i+1} onClick={()=>{props.setCurentPage(i+1)}} className="border-4 border-black">{i+1}</button>
 })}
</div>
}
export default Pagination;