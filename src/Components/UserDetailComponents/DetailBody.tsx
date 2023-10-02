const DetailBody  = () =>{
return <div className="text-[28px] flex flex-col gap-5">
    <div className="flex gap-10 ">
        <span className="w-[150px] font-mono">username:</span>
        <span className="font-serif">John</span>
    </div>
    <div className="flex gap-10">
        <span className="w-[150px] font-mono">email:</span>
        <span className="font-serif">Johndoe@skvinchex.io</span>
    </div>
    <div className="flex gap-10">
        <span className="w-[150px] font-mono">city:</span>
        <span className="font-serif">Samtredia</span>
    </div>
    <div className="flex gap-10">
        <span className="w-[150px] font-mono">address:</span>
        <span className="font-serif">Kattie Turnpike | Suite 198</span>
    </div>
</div>
}
export default DetailBody;