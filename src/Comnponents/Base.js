import CustomeNavebar from "./CustomeNavebar";

const Base=({title="Welcome",children})=>{
    return(
    <div className="container-fluid">
    <CustomeNavebar/>
{children}
<h1>This is Footer</h1>
        </div>
    )
}  
export default Base;