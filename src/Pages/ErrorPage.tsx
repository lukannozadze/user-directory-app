import { NavLink } from "react-router-dom"

const ErrorPage = () =>{
return <div className="flex flex-col items-center justify-center  h-screen bg-[#FAF9F6] gap-5 ">
    <span className="text-[154px]">404</span>
    <span className="text-[28px]">Page Not Found</span>
    <p className="text-[22px]">The page you are looking for doesn't exist or an other error occured. Back to <NavLink className='cursor-pointer text-blue-600 underline hover:no-underline' to="/">Home Page</NavLink></p>
</div>
}
export default ErrorPage