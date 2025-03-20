import React,{useState} from "react";

function UseState(){
    const[text,setText]=useState("");
    const[phone,setname]=useState("");
    const [password,setpassword]=useState("");

    const handleChange=(e)=>{
        setText(e.target.value);
    }
    
    // 新增處理密碼的函數
    const handlePasswordChange=(e)=>{
        setpassword(e.target.value);
    }

    const handlephoneChange=(e)=>{
        setname(e.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="enter name" onChange={handleChange}/><br/>
            <input type="text" placeholder="enter phone" onChange={handlephoneChange}/><br/>  
            <input type="text" placeholder="enter password" onChange={handlePasswordChange}/>
            <p>name {text}</p>
            <p>phone {phone}</p>
            <p>password {password}</p>
        </div>
    )
}
export default UseState;