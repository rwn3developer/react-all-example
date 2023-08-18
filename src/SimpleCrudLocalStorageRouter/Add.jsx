import { useEffect, useState } from "react";
import { NavLink, json } from "react-router-dom";

const Add = () => {

    const [input,setInput] = useState({
        name : '',
        phone : ''
    })
  
    const [record,setRecord] = useState([]);
    const handleClick = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input,[name] : value
        })
    }

    

    const handleSubmit = () => {
        let obj = {
            id : Math.floor(Math.random()*1000),
            name : input.name,
            phone : input.phone
        }
        
        let data = [...record,obj];
        setRecord(data)
        localStorage.setItem('crud',JSON.stringify(data));
        alert("record successfully insert");
        setInput({
            name : '',
            phone : ''
        })
    }

    useEffect(()=>{
        let data = localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [];
        setRecord(data);
    },[])
    

    return (
        <center>
            <table border={1}>
                <tr>
                    <td>Name : <input type="text" name="name" value={input.name} onChange={handleClick} /></td>
                </tr>
                <tr>
                    <td>Phone : <input type="text" name="phone" value={input.phone} onChange={handleClick} /></td>
                </tr>
                <tr>
                    <td>
                        <button onClick={ () => handleSubmit() }>Submit</button>     
                    </td>
                </tr>
            </table>
            <button>
                <NavLink to='/view'>View</NavLink>
            </button>
                
        </center>
    )
}
export default Add;