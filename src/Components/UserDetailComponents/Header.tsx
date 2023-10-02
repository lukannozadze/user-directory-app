import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Header = () =>{
    const history = useHistory();
return <div className="bg-[#ccc] flex items-center justify-between">
<div onClick={()=>{history.push('/')}} className="flex items-center p-4 gap-4">
    <span className="text-[40px]"><BsFillArrowLeftCircleFill/></span>
    <button className="text-[36px] font-mono">Go Back</button>
</div>

<span className="uppercase p-4 text-[36px] font-mono">detail information</span>
</div>

}
export default Header;